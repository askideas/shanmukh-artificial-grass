import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, CheckCircle, AlertTriangle, Scale, Shield, Wrench, CreditCard, Mail } from 'lucide-react'

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <Scale className="h-10 w-10 md:h-12 md:w-12 text-green-600 mr-2 md:mr-3" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Terms & Conditions
              </h1>
            </div>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services for artificial grass installation and bird spike solutions.
            </p>
            <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">
              Last Updated: November 13, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-8 md:mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 md:p-6 rounded-lg mb-6 md:mb-8">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Agreement to Terms</h3>
                  <p className="text-gray-700 text-xs md:text-sm">
                    By accessing or using the services of Shanmukh Artificial Grass, you agree to be bound by these Terms and Conditions. 
                    If you disagree with any part of these terms, you may not use our services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Terms */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-4 md:mb-6">
              <Wrench className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-2 md:mr-3" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">1. Services Provided</h2>
            </div>

            <div className="ml-9 md:ml-11 space-y-3 md:space-y-4">
              <p className="text-gray-700 text-sm md:text-base">
                Shanmukh Artificial Grass provides the following services:
              </p>
              
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">Artificial Grass Installation</h4>
                    <p className="text-gray-700 text-xs md:text-sm">
                      Supply and installation of premium artificial grass for residential, commercial, and sports applications. 
                      Available in various pile heights (25mm, 35mm, 40mm, 50mm) with single and double-layer backing options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">Bird Spike Solutions</h4>
                    <p className="text-gray-700 text-xs md:text-sm">
                      Installation of PROTECH Shield bird spike systems (Model C1001 polycarbonate and C1002 stainless steel) 
                      for effective and humane bird control.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">Consultation & Site Visits</h4>
                    <p className="text-gray-700 text-xs md:text-sm">
                      Free site visits, professional consultations, and custom quotations based on your specific requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quotations and Pricing */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-4 md:mb-6">
              <CreditCard className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-2 md:mr-3" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">2. Quotations and Pricing</h2>
            </div>

            <div className="ml-9 md:ml-11 space-y-3 md:space-y-4">
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-gray-700 text-xs md:text-sm">
                <li>All quotations are valid for 30 days from the date of issue</li>
                <li>Quotations are based on site visit assessments and provided measurements</li>
                <li>Prices include materials, labor, and installation unless otherwise specified</li>
                <li>Additional charges may apply for difficult access, special requirements, or modifications</li>
                <li>All prices are subject to change without prior notice</li>
                <li>GST and applicable taxes are additional unless mentioned as inclusive</li>
                <li>Final pricing will be confirmed in writing before project commencement</li>
              </ul>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-6">
              <CreditCard className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-3" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">3. Payment Terms</h2>
            </div>

            <div className="ml-9 md:ml-11 space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Payment Schedule</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li><strong>Advance Payment:</strong> 50% of total project cost required upon order confirmation</li>
                  <li><strong>Final Payment:</strong> Remaining 50% due upon project completion and client approval</li>
                  <li>Payment must be made before material procurement begins</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Accepted Payment Methods</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Bank transfer / NEFT / RTGS</li>
                  <li>UPI payments</li>
                  <li>Cash (for amounts within legal limits)</li>
                  <li>Cheque (subject to clearance)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
                <p className="text-gray-700 text-xs md:text-sm">
                  <strong>Note:</strong> Work will not commence until advance payment is received. Delays in payment may result in 
                  project postponement or cancellation.
                </p>
              </div>
            </div>
          </div>

          {/* Installation Process */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-6">
              <Wrench className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-3" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">4. Installation and Project Timeline</h2>
            </div>

            <div className="ml-9 md:ml-11 space-y-4">
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-gray-700 text-xs md:text-sm">
                <li>Installation timelines are estimates and may vary based on project size and complexity</li>
                <li>Typical residential projects take 1-2 days; commercial projects may take longer</li>
                <li>Client must ensure clear access to installation area on scheduled dates</li>
                <li>Weather conditions may affect outdoor installation schedules</li>
                <li>Any delays caused by client or unforeseen circumstances will be communicated promptly</li>
                <li>Site must be prepared as per our specifications before installation begins</li>
                <li>Client is responsible for removing existing materials unless contracted otherwise</li>
              </ul>
            </div>
          </div>

          {/* Warranties */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-6">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-3" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">5. Warranties and Guarantees</h2>
            </div>

            <div className="ml-9 md:ml-11 space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Material Warranty</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Artificial grass: Up to 10 years manufacturer warranty against defects</li>
                  <li>Bird spikes: Warranty as per manufacturer specifications</li>
                  <li>UV resistance and color fastness guaranteed</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Installation Warranty</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>1-year warranty on workmanship and installation</li>
                  <li>Free rectification of installation-related issues within warranty period</li>
                  <li>Regular maintenance recommended to maintain warranty validity</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Warranty Exclusions</h4>
                <p className="text-gray-700 text-sm mb-2">Warranty does not cover:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Damage from misuse, abuse, or neglect</li>
                  <li>Natural wear and tear beyond specified duration</li>
                  <li>Damage from extreme weather events or acts of God</li>
                  <li>Alterations or repairs by unauthorized parties</li>
                  <li>Failure to follow maintenance guidelines</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Client Responsibilities */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-6">
              <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-3" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">6. Client Responsibilities</h2>
            </div>

            <div className="ml-9 md:ml-11">
              <p className="text-gray-700 mb-4">As a client, you agree to:</p>
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-gray-700 text-xs md:text-sm">
                <li>Provide accurate measurements and site information</li>
                <li>Ensure site accessibility for our installation team and equipment</li>
                <li>Obtain necessary permissions from property owners or housing societies</li>
                <li>Clear the installation area of furniture, plants, and obstacles</li>
                <li>Provide access to water and electricity if required for installation</li>
                <li>Inspect and approve work upon completion before final payment</li>
                <li>Follow maintenance guidelines to preserve warranty</li>
                <li>Inform us of any concerns or issues promptly</li>
              </ul>
            </div>
          </div>

          {/* Cancellation and Refunds */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-3" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">7. Cancellation and Refund Policy</h2>
            </div>

            <div className="ml-9 md:ml-11 space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Cancellation by Client</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Cancellations made before material procurement: Full refund minus 10% processing fee</li>
                  <li>Cancellations after material procurement: Refund of advance minus material costs and processing charges</li>
                  <li>Cancellations after installation begins: No refund on work completed</li>
                  <li>All cancellation requests must be made in writing</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Cancellation by Shanmukh Artificial Grass</h4>
                <p className="text-gray-700 text-xs md:text-sm">
                  We reserve the right to cancel or postpone projects due to unforeseen circumstances, material unavailability, 
                  or safety concerns. In such cases, full refund will be provided with no penalties.
                </p>
              </div>
            </div>
          </div>

          {/* Liability */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-6">
              <Scale className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-3" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">8. Limitation of Liability</h2>
            </div>

            <div className="ml-9 md:ml-11">
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-gray-700 text-xs md:text-sm">
                <li>Our liability is limited to the contract value of the specific project</li>
                <li>We are not liable for indirect, consequential, or incidental damages</li>
                <li>We are not responsible for pre-existing structural issues or hidden defects in installation surfaces</li>
                <li>Client assumes responsibility for underground utilities and wiring not disclosed prior to installation</li>
                <li>We maintain necessary insurance coverage for our operations</li>
                <li>Any claims must be made in writing within 7 days of project completion</li>
              </ul>
            </div>
          </div>

          {/* Maintenance */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-6">
              <Wrench className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-3" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">9. Maintenance and Care</h2>
            </div>

            <div className="ml-9 md:ml-11">
              <p className="text-gray-700 mb-4">
                To maintain warranty validity and product longevity, clients must:
              </p>
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-gray-700 text-xs md:text-sm">
                <li>Follow provided maintenance guidelines</li>
                <li>Regularly brush artificial grass to maintain appearance</li>
                <li>Rinse periodically to remove dust and debris</li>
                <li>Avoid using harsh chemicals or cleaning agents</li>
                <li>Remove sharp objects that could damage the grass</li>
                <li>Schedule periodic professional maintenance (recommended annually)</li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-6">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-3" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">10. Intellectual Property</h2>
            </div>

            <div className="ml-9 md:ml-11">
              <p className="text-gray-700">
                All content on our website, including text, graphics, logos, images, and design elements, is the property of 
                Shanmukh Artificial Grass or licensed partners. Unauthorized use, reproduction, or distribution is prohibited 
                without written permission.
              </p>
            </div>
          </div>

          {/* Dispute Resolution */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-6">
              <Scale className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-3" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">11. Dispute Resolution</h2>
            </div>

            <div className="ml-9 md:ml-11 space-y-4">
              <p className="text-gray-700">
                In the event of any disputes or disagreements:
              </p>
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-gray-700 text-xs md:text-sm">
                <li>Parties agree to first attempt resolution through good-faith negotiations</li>
                <li>If negotiations fail, disputes may be referred to mediation</li>
                <li>Legal jurisdiction will be Nellore, Andhra Pradesh</li>
                <li>These terms are governed by the laws of India</li>
              </ul>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-3" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">12. Changes to Terms</h2>
            </div>

            <div className="ml-9 md:ml-11">
              <p className="text-gray-700">
                We reserve the right to modify these Terms and Conditions at any time. Updated terms will be posted on our 
                website with a new "Last Updated" date. Continued use of our services constitutes acceptance of revised terms. 
                For ongoing projects, terms agreed upon at contract signing will remain applicable.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center mb-6">
              <Mail className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-3" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">13. Contact Information</h2>
            </div>

            <div className="ml-9 md:ml-11">
              <p className="text-gray-700 mb-4">
                For questions about these Terms and Conditions or to discuss your project:
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Shanmukh Artificial Grass</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Address:</strong> 1st Street, Sapthagiri Colony, BV Nagar, Mini bypass, Nellore-4</p>
                  <p><strong>Phone:</strong> <a href="tel:+919441655656" className="text-green-600 hover:text-green-700 cursor-pointer">+91 9441 655 656</a></p>
                  <p><strong>Email:</strong> <a href="mailto:shanmukhartificialgrass@gmail.com" className="text-green-600 hover:text-green-700 cursor-pointer">shanmukhartificialgrass@gmail.com</a></p>
                  <p><strong>Business Hours:</strong> 24/7 (Emergency services available)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 p-8 rounded-xl">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-green-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Acknowledgment and Acceptance</h3>
                <p className="text-gray-700 mb-4">
                  By requesting a quote, signing a contract, or using our services, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms and Conditions.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 cursor-pointer"
                >
                  Ready to Get Started? Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsConditions
