import { Modal, Button } from 'antd';
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
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-center pb-4">
        { showCancelButton ? (
          <Button onClick={ onCancel } { ...cancelButtonProps }>
            { cancelLabel }
          </Button>
        ) : null }
        { showSubmitButton && !isViewMode ? (
          <Button
            type="primary"
            onClick={ onSubmit }
            loading={ confirmLoading }
            style={ { backgroundColor: '#f59e0b', borderColor: '#f59e0b', color: '#111827' } }
            { ...submitButtonProps }
          >
            { submitLabel }
          </Button>
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
