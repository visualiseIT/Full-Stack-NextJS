import { SignInButton } from "@clerk/nextjs";

export default function WelcomePage() {
  return (
    <div className="bg-yellow-100 rounded-lg shadow-lg p-8 max-w-2xl mx-auto transform rotate-1 animate-spin-in">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to QuickNotes</h1>
        <p className="text-xl mb-8 text-gray-700">
          Sign in to access our powerful post-it style quick-notes feature with smart reminders!
        </p>
        <ul className="text-left mb-8 text-gray-700 max-w-xs mx-auto">
          <li className="flex items-center mb-2">
            <span className="mr-2 flex-shrink-0">✅</span>
            <span>Create post-it style notes</span>
          </li>
          <li className="flex items-center mb-2">
            <span className="mr-2 flex-shrink-0">🕒</span>
            <span>Automatic detection of todos and date-times</span>
          </li>
          <li className="flex items-center mb-2">
            <span className="mr-2 flex-shrink-0">📧</span>
            <span>Email reminders</span>
          </li>
          <li className="flex items-center">
            <span className="mr-2 flex-shrink-0">🔔</span>
            <span>Push notifications</span>
          </li>
        </ul>
        <SignInButton mode="modal">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow">
            Sign In to Get Started
          </button>
        </SignInButton>
      </div>
    </div>
  );
}
