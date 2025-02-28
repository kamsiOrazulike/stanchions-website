import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-image4 bg-cover bg-no-repeat pt-28">
      <div className="max-w-2xl px-8 pb-8 bg-white rounded-lg shadow-xl">
        <div className="text-center">
          {/* Corporate Logo Icon */}
          <div className="inline-block p-4">
            <Image src="/logo2.svg" alt="logo" width={30} height={30} />
          </div>

          {/* Error Message */}
          <h1 className="mt-8 text-4xl font-bold text-gray-800">
            Page Not Found
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We apologize for the inconvenience. The page you are looking for
            might have been removed, had its name changed, or is temporarily
            unavailable.
          </p>

          {/* Support Information */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              If you believe this is a technical error, please contact our
              support team at{" "}
              <a
                href="mailto:support@stanchions.com"
                className="text-red-600 hover:text-red-700 font-medium"
              >
                support@stanchions.com
              </a>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-x-4">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              Return Home
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Reference Number */}
          <p className="mt-8 text-sm text-gray-500">
            Reference ID:{" "}
            {Math.random().toString(36).substring(7).toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
}
