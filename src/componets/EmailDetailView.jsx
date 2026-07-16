export default function EmailDetailsView({ email }) {
  if (!email) return null;
  return (
    <div className="border border-slate-300 p-4 bg-white">
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <img
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-sm">
                {email.from}
              </h3>
              <span className="text-xs text-gray-500">
                &lt;{email.fromEmail}&gt;
              </span>
            </div>
            <p className="text-xs text-gray-500">
              to {email.to}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="font-semibold">
          Subject: {email.subject}
        </p>
      </div>
      <div className="mt-4 whitespace-pre-line text-sm leading-7">
        {email.body}
      </div>
    </div>
  );
}