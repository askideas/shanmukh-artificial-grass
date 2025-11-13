import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Lock, Eye, Database, UserCheck, FileText, AlertCircle, Mail } from 'lucide-react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-green-600 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Privacy Policy
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. This policy outlines how Shanmukh Artificial Grass collects, uses, and protects your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last Updated: November 13, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-8 md:mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 md:p-6 rounded-lg mb-6 md:mb-8">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Important Notice</h3>
                  <p className="text-gray-700 text-xs md:text-sm">
                    Shanmukh Artificial Grass ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                    or use our services for artificial grass installation and bird spike solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-4 md:mb-6">
              <Database className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-3 flex-shrink-0" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">1. Information We Collect</h2>
            </div>

            <div className="space-y-4 md:space-y-6 ml-9 md:ml-11">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                <p className="text-gray-700 mb-3">
                  When you contact us for a quote, consultation, or service, we may collect:
                </p>
                <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-gray-700 text-xs md:text-sm">
                  <li>Full name</li>
                  <li>Mobile phone number</li>
                  <li>Email address</li>
                  <li>Physical address and service location</li>
                  <li>Service preferences (Artificial Grass or Bird Spikes)</li>
                  <li>Project details and requirements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>IP address and location data</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-4 md:mb-6">
              <UserCheck className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-3 flex-shrink-0" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
            </div>

            <div className="ml-9 md:ml-11">
              <p className="text-gray-700 mb-4 text-sm md:text-base">We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                <li>To provide quotes and consultations for artificial grass and bird spike installations</li>
                <li>To schedule site visits and installation appointments</li>
                <li>To communicate about your project status and updates</li>
                <li>To process service requests and complete installations</li>
                <li>To send follow-up communications and maintenance reminders</li>
                <li>To improve our website and services based on user feedback</li>
                <li>To provide customer support and respond to inquiries</li>
                <li>To send promotional offers and updates (with your consent)</li>
                <li>To comply with legal obligations and resolve disputes</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-4 md:mb-6">
              <Eye className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-3 flex-shrink-0" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">3. Information Sharing and Disclosure</h2>
            </div>

            <div className="ml-9 md:ml-11 space-y-4">
              <p className="text-gray-700 text-sm md:text-base">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Service Providers</h4>
                <p className="text-gray-700 text-xs md:text-sm">
                  We may share information with trusted third-party service providers who assist us in operating our business, 
                  such as payment processors, installation teams, or communication services.
                </p>
              </div>

              <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Legal Requirements</h4>
                <p className="text-gray-700 text-xs md:text-sm">
                  We may disclose your information if required by law, court order, or government regulation, 
                  or to protect our rights, property, or safety.
                </p>
              </div>

              <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Business Transfers</h4>
                <p className="text-gray-700 text-xs md:text-sm">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred 
                  to the acquiring entity.
                </p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-4 md:mb-6">
              <Lock className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-3 flex-shrink-0" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">4. Data Security</h2>
            </div>

            <div className="ml-9 md:ml-11">
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                We implement appropriate technical and organizational security measures to protect your personal information from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 text-sm md:text-base">
                <li>Unauthorized access or disclosure</li>
                <li>Accidental loss or destruction</li>
                <li>Misuse or alteration</li>
                <li>Unlawful processing</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-3 md:p-4 rounded">
                <p className="text-gray-700 text-sm">
                  <strong>Note:</strong> While we strive to protect your information, no method of transmission over the internet 
                  or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-4 md:mb-6">
              <FileText className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-2 md:mr-3 flex-shrink-0" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">5. Your Privacy Rights</h2>
            </div>

            <div className="ml-9 md:ml-11">
              <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">You have the right to:</p>
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-gray-700 text-xs md:text-sm">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:shanmukhartificialgrass@gmail.com" className="text-green-600 hover:text-green-700 font-semibold cursor-pointer">
                  shanmukhartificialgrass@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-4 md:mb-6">
              <Database className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">6. Cookies and Tracking Technologies</h2>
            </div>

            <div className="ml-9 md:ml-11">
              <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. 
                Cookies are small files stored on your device that help us:
              </p>
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-gray-700 text-xs md:text-sm">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve website functionality and performance</li>
                <li>Provide personalized content and services</li>
              </ul>
              <p className="text-gray-700 mt-4">
                You can control cookie settings through your browser preferences. However, disabling cookies may affect 
                website functionality.
              </p>
            </div>
          </div>

          {/* Data Retention */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-4 md:mb-6">
              <Database className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">7. Data Retention</h2>
            </div>

            <div className="ml-9 md:ml-11">
              <p className="text-gray-700">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
                Privacy Policy, unless a longer retention period is required by law. After completion of services, we may 
                retain basic contact information for warranty support and future service inquiries.
              </p>
            </div>
          </div>

          {/* Third-Party Links */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-4 md:mb-6">
              <Eye className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">8. Third-Party Websites</h2>
            </div>

            <div className="ml-9 md:ml-11">
              <p className="text-gray-700">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy 
                practices or content of these external sites. We encourage you to review the privacy policies of any 
                third-party sites you visit.
              </p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-4 md:mb-6">
              <Shield className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">9. Children's Privacy</h2>
            </div>

            <div className="ml-9 md:ml-11">
              <p className="text-gray-700">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
                information from children. If you believe we have collected information from a child, please contact us 
                immediately, and we will take steps to delete such information.
              </p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-4 md:mb-6">
              <FileText className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-2 md:mr-3 flex-shrink-0" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">10. Changes to This Privacy Policy</h2>
            </div>

            <div className="ml-9 md:ml-11">
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" 
                date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-4 md:mb-6">
              <Mail className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-2 md:mr-3 flex-shrink-0" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">11. Contact Us</h2>
            </div>

            <div className="ml-9 md:ml-11">
              <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us:
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Shanmukh Artificial Grass</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Address:</strong> 1st Street, Sapthagiri Colony, BV Nagar, Mini bypass, Nellore-4</p>
                  <p><strong>Phone:</strong> <a href="tel:+919441655656" className="text-green-600 hover:text-green-700 cursor-pointer">+91 9441 655 656</a></p>
                  <p><strong>Email:</strong> <a href="mailto:shanmukhartificialgrass@gmail.com" className="text-green-600 hover:text-green-700 cursor-pointer">shanmukhartificialgrass@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Consent */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 p-8 rounded-xl">
            <div className="flex items-start">
              <Shield className="h-8 w-8 text-green-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Your Consent</h3>
                <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
                  By using our website and services, you consent to this Privacy Policy and agree to its terms. 
                  If you do not agree with this policy, please do not use our services.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 cursor-pointer"
                >
                  Have Questions? Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
