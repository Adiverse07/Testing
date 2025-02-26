import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  Copy, 
  FileText, 
  LineChart,
  MessageCircle,
  Upload,
  UserCircle,
  Brain,
  AlertCircle,
  Menu,
  X,
  Home,
  Users,
  Settings,
  BookOpenCheck,
  BarChart2,
  HelpCircle,
  Sun,
  Moon,
  GraduationCap,
  Clock,
  Award,
  Send
} from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userType, setUserType] = useState('teacher'); // 'teacher' or 'student'

  const toggleUserType = () => {
    setUserType(prev => prev === 'teacher' ? 'student' : 'teacher');
    setCurrentPage('dashboard');
  };

  const renderTeacherDashboard = () => (
    <>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}>
          <div className="flex items-center gap-3 mb-2">
            <FileText className="text-indigo-600" />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Pending Evaluations</h3>
          </div>
          <p className="text-3xl font-bold text-indigo-600">24</p>
        </div>
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}>
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="text-emerald-500" />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Evaluated Today</h3>
          </div>
          <p className="text-3xl font-bold text-emerald-500">12</p>
        </div>
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}>
          <div className="flex items-center gap-3 mb-2">
            <LineChart className="text-indigo-600" />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Average Score</h3>
          </div>
          <p className="text-3xl font-bold text-indigo-600">78%</p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* AI Evaluation */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}>
          <div className="flex items-center gap-3 mb-4">
            <Brain className="text-indigo-600" size={24} />
            <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Automated Evaluation</h2>
          </div>
          <div className="space-y-4">
            <button className={`w-full flex items-center gap-3 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-indigo-50'} p-3 rounded-lg transition-colors`}>
              <Upload size={20} className="text-indigo-600" />
              <span>Upload assignments for instant AI analysis</span>
            </button>
            <button className={`w-full flex items-center gap-3 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-indigo-50'} p-3 rounded-lg transition-colors`}>
              <BookOpen size={20} className="text-indigo-600" />
              <span>Compare with course materials</span>
            </button>
            <button className={`w-full flex items-center gap-3 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-indigo-50'} p-3 rounded-lg transition-colors`}>
              <MessageCircle size={20} className="text-indigo-600" />
              <span>Generate detailed feedback</span>
            </button>
          </div>
        </div>

        {/* Plagiarism Detection */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}>
          <div className="flex items-center gap-3 mb-4">
            <Copy className="text-indigo-600" size={24} />
            <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Plagiarism Detection</h2>
          </div>
          <div className="space-y-4">
            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
              <div className="flex items-center justify-between mb-2">
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Assignment #123</span>
                <span className="text-emerald-500 font-semibold">92% Original</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{width: '92%'}}></div>
              </div>
            </div>
            <div className={`flex items-center gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <AlertCircle size={20} className="text-indigo-600" />
              <span>Real-time content originality checking</span>
            </div>
          </div>
        </div>

        {/* Recent Evaluations */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow md:col-span-2`}>
          <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Recent Evaluations</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`text-left border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <th className={`pb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Student</th>
                  <th className={`pb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Assignment</th>
                  <th className={`pb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Score</th>
                  <th className={`pb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className={`py-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>John Doe</td>
                  <td className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Data Structures Assignment #3</td>
                  <td className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>85%</td>
                  <td><span className="text-emerald-500 font-medium">Evaluated</span></td>
                </tr>
                <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className={`py-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Alice Smith</td>
                  <td className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Algorithm Analysis Project</td>
                  <td className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>92%</td>
                  <td><span className="text-emerald-500 font-medium">Evaluated</span></td>
                </tr>
                <tr>
                  <td className={`py-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Bob Johnson</td>
                  <td className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Database Management System</td>
                  <td className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>--</td>
                  <td><span className="text-amber-500 font-medium">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );

  const renderStudentDashboard = () => (
    <div className="space-y-6">
      {/* Student Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}>
          <div className="flex items-center gap-3 mb-2">
            <BookOpenCheck className="text-indigo-600" />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Submitted</h3>
          </div>
          <p className="text-3xl font-bold text-indigo-600">8</p>
        </div>
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}>
          <div className="flex items-center gap-3 mb-2">
            <Clock className="text-amber-500" />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Pending</h3>
          </div>
          <p className="text-3xl font-bold text-amber-500">3</p>
        </div>
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}>
          <div className="flex items-center gap-3 mb-2">
            <Award className="text-emerald-500" />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Average Score</h3>
          </div>
          <p className="text-3xl font-bold text-emerald-500">85%</p>
        </div>
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}>
          <div className="flex items-center gap-3 mb-2">
            <Brain className="text-purple-500" />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>AI Feedback</h3>
          </div>
          <p className="text-3xl font-bold text-purple-500">12</p>
        </div>
      </div>

      {/* Pending Assignments */}
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg`}>
        <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Pending Assignments</h2>
        <div className="space-y-4">
          {[
            { title: 'Data Structures Final Project', deadline: '2024-03-25', status: 'urgent' },
            { title: 'Algorithm Analysis Assignment', deadline: '2024-03-28', status: 'upcoming' },
            { title: 'Database Design Project', deadline: '2024-04-01', status: 'upcoming' }
          ].map((assignment, index) => (
            <div key={index} className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} flex justify-between items-center`}>
              <div>
                <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{assignment.title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Due: {assignment.deadline}</p>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
                <Upload size={16} />
                Submit
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Submissions */}
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg`}>
        <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Recent Submissions</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`text-left border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <th className={`pb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Assignment</th>
                <th className={`pb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Submitted</th>
                <th className={`pb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Score</th>
                <th className={`pb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>AI Feedback</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <td className={`py-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Machine Learning Basics</td>
                <td className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>2024-03-15</td>
                <td className="text-emerald-500 font-medium">92%</td>
                <td>
                  <button className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                    <MessageCircle size={16} />
                    View Feedback
                  </button>
                </td>
              </tr>
              <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <td className={`py-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Neural Networks Project</td>
                <td className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>2024-03-12</td>
                <td className="text-emerald-500 font-medium">88%</td>
                <td>
                  <button className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                    <MessageCircle size={16} />
                    View Feedback
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Submit New Assignment */}
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg`}>
        <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Quick Submit</h2>
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Select Assignment
            </label>
            <select className={`w-full p-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-700'}`}>
              <option>Data Structures Final Project</option>
              <option>Algorithm Analysis Assignment</option>
              <option>Database Design Project</option>
            </select>
          </div>
          <div>
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Upload File
            </label>
            <div className={`border-2 border-dashed ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} rounded-lg p-6 text-center`}>
              <Upload className={`mx-auto mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Drag and drop your file here, or click to browse</p>
            </div>
          </div>
          <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
            <Send size={16} />
            Submit Assignment
          </button>
        </div>
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg`}>
      <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-6`}>Assignment Management</h2>
      <div className="space-y-4">
        {[
          { title: 'Data Structures Final Project', deadline: '2024-03-25', submissions: 45 },
          { title: 'Algorithm Analysis Assignment', deadline: '2024-03-28', submissions: 32 },
          { title: 'Database Design Project', deadline: '2024-04-01', submissions: 28 },
          { title: 'Machine Learning Basics', deadline: '2024-04-05', submissions: 40 }
        ].map((assignment, index) => (
          <div key={index} className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className="flex justify-between items-center">
              <div>
                <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{assignment.title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Deadline: {assignment.deadline}</p>
              </div>
              <div className="text-right">
                <p className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{assignment.submissions} submissions</p>
                <button className="text-indigo-600 hover:text-indigo-700">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg`}>
      <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-6`}>Settings</h2>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Dark Mode</h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Toggle dark mode theme</p>
          </div>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
          >
            {isDarkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-600" />}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Switch to {userType === 'teacher' ? 'Student' : 'Teacher'} View</h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Change dashboard perspective</p>
          </div>
          <button
            onClick={toggleUserType}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Switch to {userType === 'teacher' ? 'Student' : 'Teacher'}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Notifications</h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Manage notification preferences</p>
          </div>
          <button className={`px-4 py-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg`}>Configure</button>
        </div>
      </div>
    </div>
  );

  const renderHelp = () => (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg`}>
      <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-6`}>Help & Support</h2>
      <div className="space-y-6">
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-2`}>Quick Start Guide</h3>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Learn how to use the AI-powered evaluation system effectively</p>
          <button className="mt-2 text-indigo-600 hover:text-indigo-700">Read More →</button>
        </div>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-2`}>FAQs</h3>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Find answers to commonly asked questions</p>
          <button className="mt-2 text-indigo-600 hover:text-indigo-700">View FAQs →</button>
        </div>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-2`}>Contact Support</h3>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Get help from our support team</p>
          <button className="mt-2 text-indigo-600 hover:text-indigo-700">Contact Us →</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-slate-50 to-slate-100'}`}>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-indigo-600 to-indigo-800'} transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30`}>
        <div className="flex items-center justify-between p-4 border-b border-indigo-500">
          <div className="flex items-center gap-2">
            <Brain size={24} className="text-emerald-400" />
            <span className="text-white font-semibold">AI Evaluation</span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="text-white hover:text-emerald-400 transition-colors">
            <X size={24} />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {[
              { icon: <Home size={20} />, text: 'Dashboard', page: 'dashboard' },
              { icon: <BookOpenCheck size={20} />, text: 'Assignments', page: 'assignments' },
              { icon: <BarChart2 size={20} />, text: 'Analytics', page: 'analytics' },
              { icon: <Settings size={20} />, text: 'Settings', page: 'settings' },
              { icon: <HelpCircle size={20} />, text: 'Help', page: 'help' }
            ].map((item, index) => (
              <li key={index}>
                <button 
                  onClick={() => {
                    setCurrentPage(item.page);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 text-white hover:bg-indigo-500 p-2 rounded-lg transition-colors ${currentPage === item.page ? 'bg-indigo-500' : ''}`}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Header */}
      <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-indigo-600 to-indigo-800'} p-6 shadow-lg sticky top-0 z-10`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="text-white hover:text-emerald-400 transition-colors"
            >
              <Menu size={24} />
            </button>
            <Brain size={32} className="text-emerald-400" />
            <h1 className="text-2xl font-bold text-white">AI Assignment Evaluation</h1>
          </div>
          <div className="flex items-center gap-4 text-white">
            <UserCircle size={24} />
            <span>{userType === 'teacher' ? 'Prof. Sarah Johnson' : 'John Doe'}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {userType === 'teacher' ? (
          {
            'dashboard': renderTeacherDashboard(),
            'assignments': renderAssignments(),
            'settings': renderSettings(),
            'help': renderHelp()
          }[currentPage] || renderTeacherDashboard()
        ) : (
          renderStudentDashboard()
        )}
      </main>
    </div>
  );
}

export default App;