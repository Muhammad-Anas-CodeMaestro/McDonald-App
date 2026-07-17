import { UserOutlined } from "@ant-design/icons";
import { Avatar, Divider } from "antd";

export default function EmailDetailsView({ email }) {
  if (!email) return null;

  return (
    <div className="border border-gray-300 bg-white p-5">
      {/* Email Header */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <Avatar
            size={42}
            icon={<UserOutlined />}
            className="bg-gray-200 text-gray-500"
          />

          <div>
            <div className="flex items-center gap-1 flex-wrap">
              <h3 className="text-sm font-semibold text-gray-800">
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

        <span className="text-xs text-gray-500 whitespace-nowrap">
          {email.time}
        </span>
      </div>

      {/* Subject */}
      <div className="mt-5">
        <h2 className="text-sm font-semibold text-gray-800">
          Subject: {email.subject}
        </h2>
      </div>

      {/* Body */}
      <div className="mt-4 text-[14px] text-gray-700 leading-7 whitespace-pre-line">
        {email.body}
      </div>

      {/* Signature */}
      {email.signature && (
        <div className="mt-5 text-sm text-gray-700 whitespace-pre-line">
          {email.signature}
        </div>
      )}

      {/* Divider */}
      {email.reply && (
        <>
          <Divider className="my-6" />

          {/* Previous Email */}
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <Avatar
                size={38}
                icon={<UserOutlined />}
                className="bg-gray-200 text-gray-500"
              />

              <div>
                <div className="flex items-center gap-1 flex-wrap">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {email.reply.from}
                  </h3>

                  <span className="text-xs text-gray-500">
                    &lt;{email.reply.fromEmail}&gt;
                  </span>
                </div>

                <p className="text-xs text-gray-500">
                  to {email.reply.to}
                </p>
              </div>
            </div>

            <span className="text-xs text-gray-500 whitespace-nowrap">
              {email.reply.time}
            </span>
          </div>

          {/* Reply Subject */}
          <div className="mt-5">
            <h2 className="text-sm font-semibold text-gray-800">
              Subject: {email.reply.subject}
            </h2>
          </div>

          {/* Reply Body */}
          <div className="mt-4 text-[14px] text-gray-700 leading-7 whitespace-pre-line">
            {email.reply.body}
          </div>

          {email.reply.signature && (
            <div className="mt-5 text-sm text-gray-700 whitespace-pre-line">
              {email.reply.signature}
            </div>
          )}
        </>
      )}
    </div>
  );
}