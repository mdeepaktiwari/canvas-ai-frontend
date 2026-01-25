import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/auth";
import {
  getPricingPackages,
  createOrder,
  verifyPayment,
} from "../services/payment";
import { LoadingIcon } from "../component/Icons";

export default function Pricing() {
  const { updateCredits } = useAuth();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    loadPackages();
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const loadPackages = async () => {
    try {
      const { data } = await getPricingPackages();
      setPackages(data.data.packages || []);
    } catch (error) {
      console.error("Error loading packages:", error);
      toast.error("Failed to load pricing packages");
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = async (packageId) => {
    if (processing) return;

    setProcessing(true);
    setSelectedPackage(packageId);

    try {
      const { data: orderData } = await createOrder(packageId);
      const { orderId, amount, currency, keyId, package: pkg } = orderData.data;

      const options = {
        key: keyId,
        amount: amount,
        currency: currency,
        name: "CanvasAI",
        description: `Purchase ${pkg.name} - ${pkg.credits} Credits`,
        order_id: orderId,
        handler: async function (response) {
          try {
            const { data: verifyData } = await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            updateCredits(verifyData.data.credits);

            toast.success(
              `Payment successful! ${verifyData.data.creditsAdded} credits added to your account.`,
            );
          } catch (error) {
            console.error("Payment verification error:", error);
            toast.error(
              error.response?.data?.message || "Payment verification failed",
            );
          } finally {
            setProcessing(false);
            setSelectedPackage(null);
          }
        },
        prefill: {
          name: "User",
          email: "user@example.com",
        },
        theme: {
          color: "#6366f1",
        },
        modal: {
          ondismiss: function () {
            setProcessing(false);
            setSelectedPackage(null);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error(error.response?.data?.message || "Failed to create order");
      setProcessing(false);
      setSelectedPackage(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
        <LoadingIcon style="animate-spin h-8 w-8 text-indigo-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Choose Your Plan
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Purchase credits to unlock unlimited content and image generation.
            Each credit gives you access to powerful AI features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl shadow-xl p-8 border-2 transition-all duration-300 hover:shadow-2xl ${
                pkg.popular
                  ? "border-purple-500 scale-105 md:scale-110"
                  : "border-gray-200 hover:border-indigo-300"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-indigo-600">
                    ₹{pkg.price}
                  </span>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 mb-4">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">
                    {pkg.credits}
                  </div>
                  <div className="text-sm text-gray-600">Credits</div>
                </div>
              </div>

              <div className="mb-6 space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">
                    {Math.floor(pkg.credits / 10)} Image Generations
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">
                    {Math.floor(pkg.credits / 5)} Content Generations
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Instant Credit Addition</span>
                </div>
              </div>

              <button
                onClick={() => handlePurchase(pkg.id)}
                disabled={processing}
                className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
                  pkg.popular
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"
                    : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
                } disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
              >
                {processing && selectedPackage === pkg.id ? (
                  <>
                    <LoadingIcon style="animate-spin h-5 w-5" />
                    <span>Processing...</span>
                  </>
                ) : (
                  "Purchase Now"
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Credit Usage Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="font-semibold text-indigo-900 mb-2">
                Content Generation
              </h3>
              <p className="text-sm text-gray-700">
                Each content generation (rewrite, expand, shorten, article, SEO)
                costs <strong>5 credits</strong>.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900 mb-2">
                Image Generation
              </h3>
              <p className="text-sm text-gray-700">
                Each image generation costs <strong>10 credits</strong>,
                regardless of resolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
