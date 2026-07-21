import { Modal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export default function ReusableTicketModal ({
  open = false,
  onCancel,
  title = 'Modal',
  mode = 'create',
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
  onSubmit,
  showFooter = true,
  footer,
  width = 800,
  className = '',
  bodyClassName = '',
  confirmLoading = false,
  children,
  showCancelButton = true,
  showSubmitButton = true,
  submitButtonProps = {},
  cancelButtonProps = {},
  centered = true,
  destroyOnClose = true,
})
{
  const isViewMode = mode === 'view';

  const modalFooter = footer ?? (
    showFooter ? (
      <div className="flex items-center justify-center gap-3 pb-4">
        { showCancelButton ? (
          <button
            type="button"
            onClick={ onCancel }
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 active:bg-slate-100 transition-colors cursor-pointer"
            { ...cancelButtonProps }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            { cancelLabel }
          </button>
        ) : null }
        { showSubmitButton && !isViewMode ? (
          <button
            type="button"
            onClick={ onSubmit }
            disabled={ confirmLoading }
            className="inline-flex items-center gap-2 rounded-md text-white bg-green-600 hover:bg-green-700 active:bg-green-800 disabled:opacity-60 px-5 py-2 text-sm font-semibold shadow-sm transition-colors cursor-pointer"
            { ...submitButtonProps }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7 2a1 1 0 00-1 1v1H5a3 3 0 00-3 3v9a3 3 0 003 3h10a3 3 0 003-3V7.414A2 2 0 0017.414 6L14 2.586A2 2 0 0012.586 2H7zm5 11a2 2 0 11-4 0 2 2 0 014 0zm-1-7H9a1 1 0 000 2h2a1 1 0 000-2z" />
            </svg>
            { confirmLoading ? 'Saving…' : submitLabel }
          </button>
        ) : null }
      </div>
    ) : null
  );

  return (
    <>
      <style>{`
        .ticket-modal .ant-modal-container{
          padding: 0px;
          border-radius: 4px
        }
        .ticket-modal .ant-modal-content {
          border-radius: 8px;
          overflow: auto;
          padding: 0;
        }

        .ticket-modal .ant-modal-header {
          background: #f5b313;
          border-bottom: 0;
          margin: 0;
          padding: 8px 16px;
        }

        .ticket-modal .ant-modal-title {
          line-height: 1.3;
        }

        .ticket-modal .ant-modal-close {
          top: 8px;
          color: #111827;
          padding: 0
        }

        .ticket-modal .ant-modal-body {
          padding: 30px 20px ;
        }
      `}</style>
      <Modal
        open={ open }
        onCancel={ onCancel }
        title={ <span className="text-xl font-semibold">{ title }</span> }
        footer={ modalFooter }
        width={ width }
        centered={ centered }
        destroyOnClose={ destroyOnClose }
        className={ `ticket-modal ${ className }`.trim() }
        wrapClassName="ticket-modal-wrap"
        maskStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.24)' }}
        style={{ padding: 0, top: 20 }}
        closeIcon={<CloseOutlined style={{ color: '#111827', fontSize: 18 }} />}
      >
        <div className={ bodyClassName || 'modal-body-inner' }>{ children }</div>
      </Modal>
    </>
  );
}
