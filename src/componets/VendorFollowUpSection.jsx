import { Timeline } from 'antd';
import ReusableTicketModal from './ReusableTicketModal';
import TicketDetailsView from './TicketDetailsView';
import view_eye from '/view_eye.png'
import { useState } from 'react';
import EmailDetailsView from './EmailDetailView';

export default function VendorFollowUpSection ()
{
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [selectedEmail, setSelectedEmail] = useState(null)

  const handleViewEmail = (selectEmail) =>
  {
    setSelectedEmail(selectEmail)
    setIsEmailModalOpen(true)
  }

  const closeViewEmail = () =>
  {
    setIsEmailModalOpen(false)
    setSelectedEmail(null)
  }

  const history = [
    {
      id: 1,
      date: "2025/05/15",
      time: "16:30",
      message: "Please update about delivery.",
      role: "Agent",
      email: {
        from: "Michelle Rivera",
        fromEmail: "michelle.rivera@example.com",
        to: "me, Sidney, Sharon",
        time: "9:14 AM (8 hours ago)",
        subject: "Assistance Required: Mouse Not Functioning Properly",
        body: `Dear IT Support Team,

        I am currently experiencing an issue with my mouse. It is not responding consistently when I move or click, and I've already tried reconnecting it and restarting my computer, but the issue persists.

        Could you please assist in troubleshooting this or provide a replacement if necessary? Let me know if any additional information is needed from my side.

        Thank you for your support.`,

        signature: `Regards,

        Muhammad Imran
        Incharge (Admin Dept.)`,

        reply: {
          from: "Sharon",
          fromEmail: "sharon@example.com",
          to: "me, Sidney, Michelle",
          time: "12:56 AM (10 hours ago)",
          subject: "Assistance Required: Mouse Not Functioning Properly",
          body: `Dear Michelle,
          I am currently experiencing an issue with my mouse. It is not responding consistently when I move or click, and I've already tried reconnecting it, but the issue persists.
          Thank you for your support.`,
          signature: `Regards,
          Sharon A.
          User (HR Dept.)`,
        }
      }
    },
    {
      id: 2,
      date: "2025/05/10",
      time: "17:30",
      message: "We are working on it.",
      role: "Vendor",
      email: {
        from: "Michelle Rivera",
        fromEmail: "michelle.rivera@example.com",
        to: "me, Sidney, Sharon",
        time: "9:14 AM (8 hours ago)",
        subject: "Assistance Required: Mouse Not Functioning Properly",
        body: `Dear IT Support Team,

        I am currently experiencing an issue with my mouse. It is not responding consistently when I move or click, and I've already tried reconnecting it and restarting my computer, but the issue persists.

        Could you please assist in troubleshooting this or provide a replacement if necessary? Let me know if any additional information is needed from my side.

        Thank you for your support.`,

        signature: `Regards,

        Muhammad Imran
        Incharge (Admin Dept.)`,

        reply: {
          from: "Sharon",
          fromEmail: "sharon@example.com",
          to: "me, Sidney, Michelle",
          time: "12:56 AM (10 hours ago)",
          subject: "Assistance Required: Mouse Not Functioning Properly",
          body: `Dear Michelle,
          I am currently experiencing an issue with my mouse. It is not responding consistently when I move or click, and I've already tried reconnecting it, but the issue persists.
          Thank you for your support.`,
          signature: `Regards,
          Sharon A.
          User (HR Dept.)`,
        }
      }
    },
    {
      id: 3,
      date: "2025/05/10",
      time: "12:15",
      message: "Please deliver ASAP.",
      role: "Agent",
      email: {
        from: "Michelle Rivera",
        fromEmail: "michelle.rivera@example.com",
        to: "me, Sidney, Sharon",
        time: "9:14 AM (8 hours ago)",
        subject: "Assistance Required: Mouse Not Functioning Properly",
        body: `Dear IT Support Team,

        I am currently experiencing an issue with my mouse. It is not responding consistently when I move or click, and I've already tried reconnecting it and restarting my computer, but the issue persists.

        Could you please assist in troubleshooting this or provide a replacement if necessary? Let me know if any additional information is needed from my side.

        Thank you for your support.`,

        signature: `Regards,

        Muhammad Imran
        Incharge (Admin Dept.)`,

        reply: {
          from: "Sharon",
          fromEmail: "sharon@example.com",
          to: "me, Sidney, Michelle",
          time: "12:56 AM (10 hours ago)",
          subject: "Assistance Required: Mouse Not Functioning Properly",
          body: `Dear Michelle,
          I am currently experiencing an issue with my mouse. It is not responding consistently when I move or click, and I've already tried reconnecting it, but the issue persists.
          Thank you for your support.`,
          signature: `Regards,
          Sharon A.
          User (HR Dept.)`,
        }
      }
    },
  ];
  return (
    <section className="border border-slate-200 px-3 py-1">
      <h3 className="font-bold text-lg pb-3">
        Follow Up
      </h3>
      <p>Send Follow Up</p>
      <div className="flex gap-3 mb-5">
        <input
          className="flex-1 px-3 h-10 border border-slate-300 bg-white"
          placeholder="Follow up text comes here..."
        />
        <button
          type="button"
          className="bg-yellow-500 px-5"
        >
          Send Follow Up
        </button>
      </div>
      <h3 className="font-semibold text-sm border-b border-slate-300 bg-white pb-2">Follow Up History:</h3>
      <Timeline
        items={ history.map((item) => ({
          color: "#1677ff",
          children: (
            <div className="flex items-center gap-4 w-full">

              <span className="font-semibold text-blue-600 w-24">
                { item.date }
              </span>

              <span className="text-gray-500 w-16">
                { item.time }
              </span>

              <span className="flex-1">
                { item.message }
                <span className="text-gray-500">
                  { " " }({ item.role })
                </span>
              </span>

              <button
                type="button"
                className="flex h-7 w-7 items-center justify-center rounded border border-blue-500 text-blue-500 hover:bg-blue-50 cursor-pointer" onClick={ () => handleViewEmail(item.email) }
              >
                <img src={ view_eye } alt="view_eye_icon" />
              </button>
            </div>
          ),
        })) }
      />
      <ReusableTicketModal
        open={ isEmailModalOpen }
        onCancel={ closeViewEmail }
        title="Vendor Follow Up Email Details"
        mode="view"
        cancelLabel="Close"
        width={ 900 }
      >
        <EmailDetailsView email={ selectedEmail } />
      </ReusableTicketModal>
    </section >
  )
}