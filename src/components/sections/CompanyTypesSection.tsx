import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, Users, Building, Heart, Receipt, Calculator, Award, X, Calendar, Phone, Clock, Book, Search, FileText } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import PhysicsCard from '../ui/PhysicsCard';
import { fadeIn } from '../../utils/animations';

interface ISOModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ISOModal: React.FC<ISOModalProps> = ({ isOpen, onClose }) => {
  const nonIafData = [
    { name: 'ISO9001:2015', fee: 3800 },
    { name: 'ISO14001:2015', fee: 3800 },
    { name: 'ISO45001:2018', fee: 3800 },
    { name: 'ISO22000:2018', fee: 4000 },
    { name: 'ISO27001:2013', fee: 5000 },
    { name: 'ISO13485:2016', fee: 5200 },
    { name: 'ISO50001:2011', fee: 5200 },
    { name: 'ISO20000-1:2011', fee: 5200 },
    { name: 'ISO22301:2012', fee: 5200 },
    { name: 'ISO21001:2018', fee: 5200 },
    { name: 'ISO55001:2014', fee: 5200 },
    { name: 'ISO41001:2018', fee: 5200 },
    { name: 'ISO37001:2016', fee: 5200 },
    { name: 'ISO29990:2010', fee: 5200 },
  ];

  const otherCertifications = [
    'CE', 'GMP', 'FDA', 'HALAL', 'HACCP', 'CMMI', 'ROHS', 'KOSHER', 'SEDEX', 'BIFMA'
  ];

  const iafEgyptData = [
    { name: 'ISO9001:2015', registration: 8000, sur1: 5000, sur2: 5000 },
    { name: 'ISO14001:2015', registration: 9000, sur1: 5500, sur2: 5500 },
    { name: 'ISO45001:2018', registration: 9000, sur1: 5000, sur2: 5000 },
    { name: 'ISO22000:2018', registration: 10000, sur1: 8000, sur2: 8000 },
  ];

  const iafUSAData = [
    { name: 'ISO27001:2013', registration: 20000, sur1: 12000, sur2: 12000 },
    { name: 'ISO13485:2016', registration: 24000, sur1: 15000, sur2: 15000 },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">ISO Certification Details</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-8">
              {/* NON IAF ISO Section */}
              <div>
                <h3 className="text-xl font-semibold mb-4">A. NON IAF ISO (3 Years Fees)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {nonIafData.map((iso) => (
                    <div key={iso.name} className="p-4 border rounded-lg">
                      <p className="font-medium">{iso.name}</p>
                      <p className="text-primary-600">₹{iso.fee}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 border rounded-lg">
                  <p className="font-medium">Other Certifications (₹8,500 each):</p>
                  <p className="mt-2">{otherCertifications.join(', ')} etc</p>
                </div>
              </div>

              {/* IAF ISO Section */}
              <div>
                <h3 className="text-xl font-semibold mb-4">B. IAF ISO</h3>
                
                {/* Egypt Board */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-3">Egypt , UK , USA Board</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border p-2 text-left">ISO</th>
                          <th className="border p-2">Registration</th>
                          <th className="border p-2">1st Sur</th>
                          <th className="border p-2">2nd Sur</th>
                        </tr>
                      </thead>
                      <tbody>
                        {iafEgyptData.map((iso) => (
                          <tr key={iso.name}>
                            <td className="border p-2">{iso.name}</td>
                            <td className="border p-2 text-center">₹{iso.registration}</td>
                            <td className="border p-2 text-center">₹{iso.sur1}</td>
                            <td className="border p-2 text-center">₹{iso.sur2}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* USA Board */}
                <div>
                  <h4 className="text-lg font-medium mb-3">USA Board</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border p-2 text-left">ISO</th>
                          <th className="border p-2">Registration</th>
                          <th className="border p-2">1st Sur</th>
                          <th className="border p-2">2nd Sur</th>
                        </tr>
                      </thead>
                      <tbody>
                        {iafUSAData.map((iso) => (
                          <tr key={iso.name}>
                            <td className="border p-2">{iso.name}</td>
                            <td className="border p-2 text-center">₹{iso.registration}</td>
                            <td className="border p-2 text-center">₹{iso.sur1}</td>
                            <td className="border p-2 text-center">₹{iso.sur2}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  consultantName: string;
}

const BookingFormModal: React.FC<BookingFormModalProps> = ({ isOpen, onClose, consultantName }) => {
  const [formData, setFormData] = useState({
    userName: '',
    userPhone: '',
    date: '',
    time: '',
    duration: 1
  });

  const availableTimeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...formData, consultantName });
    // Here you can implement the actual booking submission
    onClose();
  };

  const calculatePrice = (hours: number) => {
    if (hours <= 1) return 'Free';
    return `₹${(hours - 1) * 999}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-lg p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Book Consultation</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Consultant Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-700">Consultant</h3>
                <p className="text-lg font-semibold text-primary-600">{consultantName}</p>
              </div>

              {/* User Details */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500"
                    value={formData.userName}
                    onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-3 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500"
                    value={formData.userPhone}
                    onChange={(e) => setFormData({ ...formData, userPhone: e.target.value })}
                    placeholder="10-digit mobile number"
                  />
                </div>
              </div>

              {/* Scheduling */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="">Select a time slot</option>
                    {availableTimeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Duration (Hours)
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                  >
                    {[1, 2, 3, 4].map((hours) => (
                      <option key={hours} value={hours}>
                        {hours} {hours === 1 ? 'Hour' : 'Hours'} ({calculatePrice(hours)})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Pricing Info */}
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <h3 className="font-medium text-gray-700">Pricing Information</h3>
                <p className="text-sm text-gray-600">• First hour consultation is FREE</p>
                <p className="text-sm text-gray-600">• Additional hours: ₹999 per hour</p>
                <p className="text-sm text-gray-600">• Total Cost: {calculatePrice(formData.duration)}</p>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Confirm Booking
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface ConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultantModal: React.FC<ConsultantModalProps> = ({ isOpen, onClose }) => {
  const [selectedConsultant, setSelectedConsultant] = useState<string | null>(null);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  const consultants = [
    { id: 1, name: 'Santunu Srivastav', phone: '8240596184' },
    { id: 2, name: 'Sahajpeet Kour', phone: '8240596184' },
    { id: 3, name: 'Somnath Gupta', phone: '8240596184' },
    { id: 4, name: 'S. Alam', phone: '8240596184' },
    { id: 5, name: 'Gurdeep Sing', phone: '8240596184' },
    { id: 6, name: 'L. K. Agarwal', phone: '8240596184' },
    { id: 7, name: 'Sneeha Gupta', phone: '8240596184' },
    { id: 8, name: 'Sekhar Dey', phone: '8240596184' },
    { id: 9, name: 'Prasenjit Pramanik', phone: '8240596184' },
    { id: 10, name: 'Amrit Routh', phone: '8240596184' }
  ];

  const handleBookAppointment = (consultantId: number, consultantName: string) => {
    setSelectedConsultant(consultantName);
    setIsBookingFormOpen(true);
  };

  const handleCall = (phone: string, consultantName: string) => {
    window.location.href = `tel:${phone}`;
    console.log(`Calling ${consultantName} at ${phone}`);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Our Expert Consultants</h2>
                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {consultants.map((consultant) => (
                  <div
                    key={consultant.id}
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col mb-3">
                      <h3 className="text-lg font-medium">{consultant.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {/* <Phone size={14} className="text-primary-600" /> */}
                        {/* <span className="text-sm text-gray-600">{consultant.phone}</span> */}
                        <span className="text-primary-600 text-sm ml-auto">Available</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleBookAppointment(consultant.id, consultant.name)}
                        className="flex items-center gap-2 px-3 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors flex-1"
                      >
                        <Calendar size={16} />
                        Book Appointment
                      </button>
                      <a
                        href={`tel:${consultant.phone}`}
                        className="flex items-center gap-2 px-3 py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-colors"
                        onClick={() => handleCall(consultant.phone, consultant.name)}
                      >
                        <Phone size={16} />
                        Call
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center text-sm text-gray-600">
                <p>Choose a consultant and book your free consultation session</p>
                <p className="mt-1">Our experts are available for immediate assistance</p>
                <p className="mt-1 font-medium">Contact: 8240596184</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <BookingFormModal
        isOpen={isBookingFormOpen}
        onClose={() => setIsBookingFormOpen(false)}
        consultantName={selectedConsultant || ''}
      />
    </>
  );
};

interface CompanyBooksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CompanyBooksModal: React.FC<CompanyBooksModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('company-search');

  const tabs = [
    { id: 'company-search', label: 'Company Name Search' },
    { id: 'company-reg', label: 'Company Registration' },
    { id: 'benefits', label: 'Benefits & Documents' },
    { id: 'director-info', label: 'Director Information' },
    // { id: 'company-types', label: 'Types of Companies' },
    { id: 'comparison', label: 'Entity Comparison' },
    { id: 'nidhi', label: 'Nidhi Company' },
    { id: 'section-8', label: 'Section 8 Company' },
    { id: 'producer', label: 'Producer Company' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-lg w-full max-w-7xl h-[90vh] overflow-hidden mx-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex h-full">
              {/* Sidebar */}
              <div className="w-72 bg-gray-50 p-4 border-r overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Company Books</h2>
                  <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full">
                    <X size={20} />
                  </button>
                </div>
                <nav className="space-y-2">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary-600 text-white'
                          : 'hover:bg-gray-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Content Area */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  {/* Company Search Tab */}
                  {activeTab === 'company-search' && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold">Company Name Search</h3>
                      <div className="prose max-w-none">
                        <h4>What is Company Registration?</h4>
                        <p>Incorporation is the formation of a new corporation/ company (a corporation being a legal entity that is effectively recognized as a person under the law). The corporation may be a business, a non-profit organization, a startup, a micro small or medium scale business.</p>
                        
                        <h4>About MCA</h4>
                        <p>The Ministry of Corporate Affairs is an Indian government ministry responsible for administering the Companies Act 2013, Companies Act 1956, and Limited Liability Partnership Act, 2008. It regulates Indian enterprises in the Industrial and Services sector under Nirmala Sitharaman, the current Minister of Corporate Affairs.</p>

                        <h4>Guidelines for choosing your Company Name</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-bold">Do's</h5>
                            <ul className="list-disc pl-4">
                              <li>Include words that reflect your business activity</li>
                              <li>Ensure name uniqueness to avoid duplication</li>
                              <li>Add "PVT LTD" suffix for private limited companies</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-bold">Don'ts</h5>
                            <ul className="list-disc pl-4">
                              <li>Use offensive names</li>
                              <li>Use plural versions of existing names</li>
                              <li>Combine existing names to create similar ones</li>
                              <li>Use different tenses of existing names</li>
                            </ul>
                          </div>
                        </div>

                        <h4>Special Requirements</h4>
                        <ul className="list-disc pl-4">
                          <li><strong>Regulatory Approval:</strong> Names including words like insurance, bank, stock exchange, etc. require approvals from RBI, SEBI, IRDAI</li>
                          <li><strong>Authorized Capital:</strong> Names with words like International, Globe, Continental, etc. require minimum ₹5 lakhs authorized capital</li>
                          <li><strong>Domain Name:</strong> Block your domain name to avoid future conflicts</li>
                        </ul>

                        <h4>Name Availability Check Process</h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <ol className="list-decimal pl-4">
                            <li>Enter company name and click "Search"</li>
                            <li>Results will show one of three probabilities:
                              <ul className="list-disc pl-4 mt-2">
                                <li><strong>High Probability:</strong> Less than 3 similar results</li>
                                <li><strong>Moderate Probability:</strong> 50% approval chance</li>
                                <li><strong>Low Probability:</strong> More than 8 similar results</li>
                              </ul>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Company Registration Tab */}
                  {activeTab === 'company-reg' && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-primary-600">Company Registration</h3>
                      <div className="prose max-w-none">
                        <h4 className="text-xl font-semibold text-gray-800">Types of Company Incorporation</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="border-2 border-primary-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white">
                            <h5 className="font-bold text-lg text-primary-600 mb-3">Limited Liability Partnership</h5>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Secure personal assets protection</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Flexible compliance requirements</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>100% FDI allowed</span>
                              </li>
                            </ul>
                          </div>
                          <div className="border-2 border-primary-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white">
                            <h5 className="font-bold text-lg text-primary-600 mb-3">Private Limited Company</h5>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Ideal for raising venture capital</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Enhanced credibility in market</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Preferred choice for startups</span>
                              </li>
                            </ul>
                          </div>
                          <div className="border-2 border-primary-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white">
                            <h5 className="font-bold text-lg text-primary-600 mb-3">One Person Company</h5>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Better credit rating potential</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Single ownership structure</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Significant tax benefits</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <h4 className="text-xl font-semibold text-gray-800 mt-8">Registration Process</h4>
                        <div className="bg-gradient-to-r from-primary-50 to-white p-6 rounded-lg shadow-sm">
                          <ol className="list-none space-y-4">
                            <li className="flex items-center">
                              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white font-bold mr-3">1</span>
                              <span className="text-gray-700">Free Consultation and Documentation Review</span>
                            </li>
                            <li className="flex items-center">
                              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white font-bold mr-3">2</span>
                              <span className="text-gray-700">Fill up Application Draft</span>
                            </li>
                            <li className="flex items-center">
                              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white font-bold mr-3">3</span>
                              <span className="text-gray-700">Submit Documents to Government</span>
                            </li>
                            <li className="flex items-center">
                              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white font-bold mr-3">4</span>
                              <span className="text-gray-700">Step-by-step Incorporation Process</span>
                            </li>
                          </ol>
                        </div>

                        <h4 className="text-xl font-semibold text-gray-800 mt-8">Key Benefits</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-500">
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span className="font-medium">Legal Identity & Recognition</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span className="font-medium">Tax Benefits & Incentives</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span className="font-medium">Investment Opportunities</span>
                              </li>
                            </ul>
                          </div>
                          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-500">
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span className="font-medium">Limited Individual Liability</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span className="font-medium">Enhanced Brand Image</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span className="font-medium">Easier Access to Credit</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Benefits Tab */}
                  {activeTab === 'benefits' && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-primary-600">Benefits & Required Documents</h3>
                      <div className="prose max-w-none">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="border-2 border-primary-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white">
                            <h4 className="font-bold text-lg text-primary-600 mb-4">Private Limited Company</h4>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>2-Digital Signature Certificate (DSC)</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>2-Director Identification Number (DIN)</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Company Name Approval By Ministry</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Memorandum of association (MoA)</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Articles of association(AoA)</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Registration Certificate</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>PAN & TAN</span>
                              </li>
                            </ul>
                          </div>
                          <div className="border-2 border-primary-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white">
                            <h4 className="font-bold text-lg text-primary-600 mb-4">Limited Liability Partnership</h4>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>2-Digital Signature Certificate (DSC)</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>2-Director Identification Number (DIN)</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Company Name Approval</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>LLP Agreement</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Registration Certificate</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>PAN & TAN</span>
                              </li>
                            </ul>
                          </div>
                          <div className="border-2 border-primary-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white">
                            <h4 className="font-bold text-lg text-primary-600 mb-4">One Person Company</h4>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Digital Signature Certificate (DSC)</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Director Identification Number (DIN)</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Name Approval (RUN)</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Incorporation Documents</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>PAN & TAN</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Bank Account Opening</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="mt-8 bg-gradient-to-r from-primary-50 to-white p-6 rounded-lg shadow-sm">
                          <h4 className="text-xl font-semibold text-gray-800 mb-4">Additional Benefits</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                                <span className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                </span>
                                <span className="font-medium">Professional Business Image</span>
                              </div>
                              <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                                <span className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                </span>
                                <span className="font-medium">Easy Fund Raising</span>
                              </div>
                              <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                                <span className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                </span>
                                <span className="font-medium">Tax Benefits & Savings</span>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                                <span className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                </span>
                                <span className="font-medium">Limited Liability Protection</span>
                              </div>
                              <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                                <span className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                </span>
                                <span className="font-medium">Perpetual Succession</span>
                              </div>
                              <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                                <span className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                </span>
                                <span className="font-medium">Separate Legal Entity</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Director Information Tab */}
                  {activeTab === 'director-info' && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-primary-600">Director Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-500">
                          <h4 className="text-xl font-semibold text-gray-800 mb-4">Required Documents</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Passport Size Photograph</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>PAN Card</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Aadhar Card</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Latest Bank Statement/Phone Bill/Electricity Bill</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-500">
                          <h4 className="text-xl font-semibold text-gray-800 mb-4">Eligibility Criteria</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Minimum Age: 18 Years</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Indian Resident</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>No History of Bankruptcy</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Sound Mind and Financial Status</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'types' && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-primary-600">Types of Companies</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                              </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-primary-600">Private Limited Company</h4>
                          </div>
                          <p className="text-gray-600 mb-4">A privately held small business entity with limited liability for members.</p>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>2-200 shareholders</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Minimum two directors</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Foreign nationals can be directors</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Minimum paid up capital: ₹1 Lakh</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                              </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-primary-600">One Person Company</h4>
                          </div>
                          <p className="text-gray-600 mb-4">A company which contains exactly one member with limited liability.</p>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Single shareholder (Indian citizen and resident)</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Nominee required</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Separate legal entity</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Better credit rating potential</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                              </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-primary-600">Limited Liability Partnership</h4>
                          </div>
                          <p className="text-gray-600 mb-4">A partnership with limited liability protection for all partners.</p>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Minimum 2 partners</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>No maximum limit on partners</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Flexible compliance requirements</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>100% FDI allowed</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                        <div className="flex items-center mb-6">
                          <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-primary-600">Private Limited Company Details</h4>
                        </div>
                        
                        <div className="mb-6">
                          <h5 className="text-lg font-semibold text-gray-800 mb-3">What is a Private Limited Company?</h5>
                          <p className="text-gray-700">A Private Limited Company is a privately held small business entity. The liability of members is limited to the number of shares held by that member. It is governed by Companies Act, 2013 with a minimum of two shareholders and maximum of 200.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-3">Features</h5>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Limited liability protection for members</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Separate legal entity status</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Must use "pvt.ltd." after name</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Maximum 200 members</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Perpetual existence regardless of member changes</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-3">Benefits</h5>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Limited liabilities for members</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Easy to form compared to public sectors</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Better access to funding</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Tax advantages over public sectors</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Allows for Foreign Direct Investment</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-primary-50 rounded-lg p-6">
                          <h5 className="text-lg font-semibold text-gray-800 mb-3">Required Documents</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Identity proof of Directors (PAN Card)</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Address proof of registered office</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Address proof of Directors</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Passport size photos of Directors</span>
                              </li>
                            </ul>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Rent agreement (if applicable)</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>NOC from landlord</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>MoA and AoA subscriber sheets</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Nationality proof (for foreign nationals)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                        <div className="flex items-center mb-6">
                          <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-primary-600">One Person Company Details</h4>
                        </div>
                        
                        <div className="mb-6">
                          <h5 className="text-lg font-semibold text-gray-800 mb-3">What is a One Person Company?</h5>
                          <p className="text-gray-700">A One Person Company is a company which contains exactly one member. It is a separate legal entity from its promoter and the promoter has limited liability. Perfect for entrepreneurs starting ventures on their own.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h5>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Single shareholder (must be Indian citizen and resident)</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Nominee required in case of death/incapacity</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Separate legal entity status</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Limited liability protection</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-3">Required Documents</h5>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Identity proof of director and nominee (PAN card)</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Address proof of director and nominee</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Address proof of office</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>NOC from landlord</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>DSC and DIN of director</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Passport photo of director</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center mb-6">
                          <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-primary-600">Limited Liability Partnership Details</h4>
                        </div>
                        
                        <div className="mb-6">
                          <h5 className="text-lg font-semibold text-gray-800 mb-3">What is a Limited Liability Partnership?</h5>
                          <p className="text-gray-700">A Limited Liability Partnership (LLP) is a partnership with limited liability protection for all partners. It combines the flexibility of a partnership with the limited liability benefits of a company.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h5>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Minimum 2 partners required</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>No maximum limit on partners</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>No minimum capital requirement</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Separate legal entity status</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Partners' liability limited to agreed contribution</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-3">Benefits</h5>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Secure personal assets protection</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Lower compliance requirements</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>100% FDI allowed in Indian markets</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Flexible management structure</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Lower cost of formation and operation</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'comparison' && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-primary-600">Entity Comparison</h3>
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                          <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-primary-600 border-b-2 border-primary-100 pb-2">Private Limited Company</h4>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Highest Credibility</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Easy Fund Raising</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>100% FDI Allowed</span>
                              </li>
                            </ul>
                          </div>
                          <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-primary-600 border-b-2 border-primary-100 pb-2">Limited Liability Partnership</h4>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Low Compliance</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>No Capital Requirement</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Partnership Benefits</span>
                              </li>
                            </ul>
                          </div>
                          <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-primary-600 border-b-2 border-primary-100 pb-2">One Person Company</h4>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Single Director</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Quick Registration</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                                <span>Limited Liability</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'nidhi' && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-primary-600">Nidhi Company</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-500">
                          <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Minimum 7 Members Required</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Minimum Share Capital: ₹5 Lakhs</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Only Indian Citizens Eligible</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Operates in Specified Area Only</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-500">
                          <h4 className="text-xl font-semibold text-gray-800 mb-4">Benefits</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Mutual Benefit Society</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Lending & Borrowing Among Members</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Special Tax Benefits</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Regulated by RBI</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'section-8' && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-primary-600">Section 8 Company</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-r from-primary-50 to-white p-6 rounded-lg shadow-md">
                          <h4 className="text-xl font-semibold text-gray-800 mb-4">Requirements</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Non-Profit Objective</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Minimum 2 Directors</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>No Minimum Capital</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Special License Required</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gradient-to-r from-primary-50 to-white p-6 rounded-lg shadow-md">
                          <h4 className="text-xl font-semibold text-gray-800 mb-4">Advantages</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Tax Exemptions</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Separate Legal Entity</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Can Accept Donations</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Limited Liability Protection</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'producer' && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-primary-600">Producer Company</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                          <h4 className="text-xl font-semibold text-primary-600 mb-4">Characteristics</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Minimum 10 Members</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Only Producers Can Join</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Democratic Management</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Limited Liability</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                          <h4 className="text-xl font-semibold text-primary-600 mb-4">Benefits</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Professional Management</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Better Market Access</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Value Addition to Products</span>
                            </li>
                            <li className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2"></span>
                              <span>Government Support</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CompanyTypesSection: React.FC = () => {
  const [isISOModalOpen, setIsISOModalOpen] = useState(false);
  const [isConsultantModalOpen, setIsConsultantModalOpen] = useState(false);
  const [isCompanyBooksModalOpen, setIsCompanyBooksModalOpen] = useState(false);

  const companyTypes = [
    {
      id: 'company',
      icon: <Building size={36} />,
      title: 'Private Limited Company',
      price: '8,999',
      description: 'Private limited company governed in India by Companies Act 2013, under section 2(68).',
      features: [
        'Certificate of Incorporation',
        'Director Identification Number',
        // 'GST Registration',
        'ESI Registration',
        'Legal Documentation',
        'Post-incorporation Support'
      ],
      highlightedFeature: 'Most Popular'
    },
    {
      id: 'company',
      icon: <Building size={36} />,
      title: 'One Person Compnay (OPC)',
      price: '7,499',
      description: 'Private limited company governed in India by Companies Act 2013, under section 2(68).',
      features: [
        'Certificate of Incorporation',
        'Director Identification Number',
        // 'GST Registration',
        'ESI Registration',
        'Legal Documentation',
        'Post-incorporation Support'
      ],
      highlightedFeature: 'Most Popular'
    },
    {
      id: 'llp',
      icon: <Users size={36} />,
      title: 'LLP Registration',
      price: '9,999',
      description: 'Limited Liability Partnership providing the benefits of both partnership and company.',
      features: [
        'LLP Agreement',
        'DPIN for Partners',
        'Certificate of Incorporation',
        'PAN & TAN',
        'Bank Account Assistance',
        // '1 Year Compliance Support'
      ]
    },
    {
      id: 'nidhi',
      icon: <Landmark size={36} />,
      title: 'Nidhi Limited Company',
      price: '27,999',
      description: 'Nidhi Company governed in India by Companies Act 2013, under section 403.',
      features: [
        'Certificate of Incorporation',
        'Nidhi Rules Compliance',
        'Director Identification Number',
        'Bank Account Opening',
        'PAN & TAN',
        'RBI Guidelines Compliance'
      ]
    },
    {
      id: 'section8-1',
      icon: <Heart size={36} />,
      title: 'Section 8 Company (NGO)',
      price: '8,499',
      description: 'A Non Profit Organisation in India, registered under Companies Act 2013, as Section 8 Company.',
      features: [
        'Certificate of Incorporation',
        'Certificate of Section-8 Licence',
        // '80G & 12A Registration',
        'MOA, AOA',

        'CSR Funding Eligibility',
        'Tax Exemption Support',
        // 'Annual Compliance Assistance'
      ]
    },
    {
      id: 'gst',
      icon: <Receipt size={36} />,
      title: 'Propitership GST Registration',
      price: '999',
      description: 'Complete GST registration service for your business with expert assistance.',
      features: [
        'GST Number',
        'Registration Certificate',
        'GST Compliance Setup',
        'Filing Guidelines',
        'Business Category Setup',
        'Post-registration Support'
      ]
    },
    
    {
      id: 'gst',
      icon: <Receipt size={36} />,
      title: 'Propitership GST Return ',
      price: '1499 / Monthly',
      description: 'Complete GST return filing service for your business with expert assistance.',
      features: [
        'GST-R1 3A and 3B Submission',
        // 'Registration Certificate',
        // 'GST Compliance Setup',
        // 'Filing Guidelines',
        // 'Business Category Setup',
        // 'Post-registration Support'
      ]
    },
    
    {
      id: 'gst',
      icon: <Receipt size={36} />,
      title: 'Corporate GST Registration',
      price: '2,499',
      description: 'Complete GST registration service for your business with expert assistance.',
      features: [
        'GST Number',
        'Registration Certificate',
        'GST Compliance Setup',
        'Filing Guidelines',
        'Business Category Setup',
        'Post-registration Support'
      ]
    },
    {
      id: 'gst',
      icon: <Receipt size={36} />,
      title: 'Corporate GST Return ',
      price: '2,999 / Monthly',
      description: 'Complete GST return filing service for your business with expert assistance.',
      features: [
        'GST-R1 3A and 3B Submission',
      ]
    },
    
    {
      id: 'income-tax',
      icon: <Calculator size={36} />,
      title: ' Income Tax Return (Non Taxable)',
      price: '999',
      description: 'Professional income tax return filing service for individuals.',
      features: [
        'Income Assessment',
        'Tax Calculation',
        'Deductions Planning',
        'ITR Filing',
        'Form 16 Processing',
        'Tax Saving Advice'
      ]
    },
    {
      id: 'income-tax',
      icon: <Calculator size={36} />,
      title: ' Corporate Income Tax Return',
      price: '4,999',
      description: 'Professional income tax return filing service for Corporate.',
      features: [
        'Income Assessment',
        'Tax Calculation',
        'Deductions Planning',
        'ITR Filing',
        'Form 16 Processing',
        'Tax Saving Advice'
      ]
    },
    {
      id: 'iso-certifications',
      icon: <Award size={36} />,
      title: 'Trade mark Registration/ Renewal (Exclude govt. fees)',
      price: '2,499',
      description: 'Comprehensive trademark registration services for your business.',
      features: [
        'Trade Mark Registration',
        'Trademark Search',
        'Trademark Application',
        'Trademark Renewal Support',
        'Trademark Transfer',
        'Trademark Assignment',
        'Trademark Litigation',
        'Trademark Valuation',    
      ],
      // onClick: () => setIsISOModalOpen(true),
      // buttonText: 'View More Certifications'
    },
    {
      id: 'iso-certifications',
      icon: <Award size={36} />,
      title: 'Fssai Registration (Exclude govt. fees)',
      price: '2,499',
      description: 'FSSAI Registration / Renewal',
      features: [
        'FSSAI Registration',
        'FSSAI Renewal Support',
        'FSSAI Transfer',
        'FSSAI Assignment',
        'FSSAI Litigation',
        'FSSAI Valuation',
      ],
      // onClick: () => setIsISOModalOpen(true),
      // buttonText: 'View More Certifications'
    },
    {
      id: 'iso-certifications',
      icon: <Award size={36} />,
      title: 'Startup India Registration ',
      price: '5,999',
      description: ' Startup India Registration',
      features: [
        'Startup India Registration',
        'Startup India Renewal Support',
        'Startup India Transfer',
        'Startup India Assignment',
        'Startup India Litigation',
        'Startup India Valuation',
      ],
      // onClick: () => setIsISOModalOpen(true),
      // buttonText: 'View More Certifications'
    },
    {
      id: 'iso-certifications',
      icon: <Award size={36} />,
      title: 'Fire and Sefty Registration / Renewal (Exclude govt. fees) ',
      price: '2,499',
      description: 'Fire and Sefty Registration',
      features: [
        'Fire and Sefty Registration',
        'Fire and Sefty Renewal Support',
        'Fire and Sefty Transfer',
        'Fire and Sefty Assignment',
        'Fire and Sefty Litigation',
        'Fire and Sefty Valuation',
      ],
      // onClick: () => setIsISOModalOpen(true),
      // buttonText: 'View More Certifications'
    },
    {
      id: 'iso-certifications',
      icon: <Award size={36} />,
      title: 'MSME Udyam Registration ',
      price: '999',
      description: 'Msme Udyam Registration',
      features: [
        'Msme Udyam Registration',
        'Msme Udyam Assignment',
        'Msme Udyam Litigation',
        'Msme Udyam Valuation',
      ],
      // onClick: () => setIsISOModalOpen(true),
      // buttonText: 'View More Certifications'
    },
    {
      id: 'iso-certifications',
      icon: <Award size={36} />,
      title: 'Trade Lisence / Renewal (Exclude govt. fees)',
      price: '399',
      description: 'Trade Lisence',
      features: [
        'Trade Lisence',
        'Trade Lisence Renewal Support',
        'Trade Lisence Transfer',
        'Trade Lisence Assignment',
        'Trade Lisence Litigation',
        'Trade Lisence Valuation',
      ],
      // onClick: () => setIsISOModalOpen(true),
      // buttonText: 'View More Certifications'
    },
    {
      id: 'iso-certifications',
      icon: <Award size={36} />,
      title: 'Partnership Deed Charges (Exclude Stamp Duty Fees) ',
      price: '2,999',
      description: 'Partnership Deed',
      features: [
        'Partnership Deed',
        'Deep Drafting',
        'Notary  and Registration Support',
      ],
      // onClick: () => setIsISOModalOpen(true),
      // buttonText: 'View More Certifications'
    },
    {
      id: 'iso-certifications',
      icon: <Award size={36} />,
      title: 'Rent Agrement Deed Drafting Charges ',
      price: '1499',
      description: 'Rent Agrement Deed',
      features: [
        'Rent Deed',
        'Deep Drafting',
        'Notary  and Registration Support',
      ],
      // onClick: () => setIsISOModalOpen(true),
      // buttonText: 'View More Certifications'
    },
    {
      id: 'iso-certifications',
      icon: <Award size={36} />,
      title: 'ISO Certifications',
      price: 'From 3,800',
      description: 'Comprehensive ISO certification services for both IAF and NON-IAF standards.',
      features: [
        'Multiple ISO Standards',
        'Egypt , UK & USA Board Options',
        'Registration Support',
        'Documentation Guidance',
        'Compliance Assistance',
        'Post-certification Support'
      ],
      onClick: () => setIsISOModalOpen(true),
      buttonText: 'View More Certifications'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-neutral-50">
      <ISOModal isOpen={isISOModalOpen} onClose={() => setIsISOModalOpen(false)} />
      <ConsultantModal isOpen={isConsultantModalOpen} onClose={() => setIsConsultantModalOpen(false)} />
      <CompanyBooksModal isOpen={isCompanyBooksModalOpen} onClose={() => setIsCompanyBooksModalOpen(false)} />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="text-primary-600 font-medium mb-3"
          >
            BUSINESS REGISTRATION SOLUTIONS
          </motion.p>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
          >
            Choose the Right Business Structure
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="text-neutral-700"
          >
            We offer comprehensive registration services for various business entities. 
            Select the structure that best fits your business goals and requirements.
          </motion.p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {companyTypes.map((company) => (
            <PhysicsCard key={company.id} springStrength={0.3}>
              <ServiceCard
                icon={company.icon}
                title={company.title}
                price={company.price}
                description={company.description}
                features={company.features}
                highlightedFeature={company.highlightedFeature}
                onClick={company.onClick}
                buttonText={company.buttonText}
              />
            </PhysicsCard>
          ))}
        </motion.div>
        
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 text-center space-y-4"
        >
          <p className="text-neutral-700 mb-6">
            Not sure which business structure is right for you? Get expert advice tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsConsultantModalOpen(true)}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors gap-2"
            >
              <Calendar size={20} />
              Schedule a Free Consultation
            </button>
            <button 
              onClick={() => setIsCompanyBooksModalOpen(true)}
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-medium rounded-md transition-colors gap-2"
            >
              <Book size={20} />
              Company Books
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyTypesSection;