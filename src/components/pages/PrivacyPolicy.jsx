import React from 'react'

function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        MimiHair respects your privacy and is committed to protecting your personal information.
        This Privacy Policy explains how we collect, use, and safeguard your data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address, phone number,
        shipping and billing address when you create an account or place an order.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Payment Information</h2>
      <p className="mb-4">
        All payments are processed securely through trusted third-party providers.
        MimiHair does not store your card details.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to process orders, deliver products, communicate with you,
        and improve our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>
        If you have questions about this policy, contact us at{" "}
        <span className="font-medium">support@mimihair.com</span>.
      </p>
    </div>
  )
}

export default PrivacyPolicy


