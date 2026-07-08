import { Modal, Button } from 'antd';
import TicketFormFields from '../foam/TicketFormFields.jsx';
import upload from '/upload.png';
import download from '/download.png';
import view from '/view.png';
import deleteicon from '/delete.png';

export default function ReusableTicketModal ({
  open = false,
  onCancel,
  title = 'Ticket',
  mode = 'create',
  submitLabel = 'Create Ticket',
  cancelLabel = 'Cancel',
  fields = [],
  formData = {},
  onFieldChange,
  onSubmit,
  showFooter = true,
  showAttachments = true,
  footer,
  width = 800,
  className = '',
  confirmLoading = false,
  children,
})
{
  const isViewMode = mode === 'view';

  const displayFields = fields.map((field) => ({
    ...field,
    disabled: field.disabled || isViewMode,
  }));

  const handleFieldChange = (name) => (event) =>
  {
    if (isViewMode) return;
    onFieldChange?.(name)?.(event);
  };

  const modalFooter = footer ?? (
    showFooter ? (
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-center">
        <Button onClick={ onCancel }>{ cancelLabel }</Button>
        { isViewMode ? null : (
          <Button
            type="primary"
            onClick={ onSubmit }
            loading={ confirmLoading }
            style={ { backgroundColor: '#f59e0b', borderColor: '#f59e0b', color: '#111827' } }
          >
            { submitLabel }
          </Button>
        ) }
      </div>
    ) : null
  );

  return (
    <Modal>
      <style>{ `.ticket-modal .ant-modal-header{background-color:#f59e0b!important;} .ticket-modal .ant-modal-title{color:#111827!important;}` }</style>
      <Modal
        open={ open }
        onCancel={ onCancel }
        title={ <span className="text-xl font-semibold">{ title }</span> }
        footer={ modalFooter }
        width={ width }
        centered
        destroyOnClose
        className={ `ticket-modal ${ className }` }
        styles={ { body: { maxHeight: '80vh', overflowY: 'auto', paddingTop: 8 } } }
      >
        <form
          className="space-y-2"
          onSubmit={ (event) =>
          {
            event.preventDefault();
            onSubmit?.(event);
          } }
        >
          { children ?? (
            <>
              <TicketFormFields
                fields={ displayFields }
                formData={ formData }
                onFieldChange={ handleFieldChange }
                className="grid-cols-1 md:grid-cols-3"
              />

              { showAttachments ? (
                <div className="mt-5 border border-slate-200 p-2">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-base font-semibold">Attach Documents/Image</p>
                  </div>

                  <div className="grid gap-2 lg:grid-cols-[1.5fr_auto]">
                    <div className="grid gap-2 sm:grid-cols-10">
                      <div className="flex flex-col gap-2 sm:col-span-3">
                        <label className="text-sm font-light text-slate-700">Document/Image Name</label>
                        <input
                          type="text"
                          className="w-full border border-slate-300 bg-white p-2 text-sm focus:outline-none focus:border-yellow-500"
                        />
                      </div>
                      <div className="flex flex-col gap-2 sm:col-span-2">
                        <label className="text-sm font-light text-slate-700">Attach Document</label>
                        <button
                          type="button"
                          className="inline-flex w-full items-center justify-center gap-2 border border-slate-300 bg-white p-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                        >
                          <img src={ upload } alt="uploadicon" />
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-200">
                          <th className="border border-slate-300 px-4 py-3 text-left">Document/Image Name</th>
                          <th className="border border-slate-300 px-4 py-3 text-left">Download</th>
                          <th className="border border-slate-300 px-4 py-3 text-left">View</th>
                          <th className="border border-slate-300 px-4 py-3 text-left">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-slate-300 px-4 py-3">Manager Permission Letter</td>
                          <td className="border border-slate-300 px-4 py-3">
                            <img src={ download } alt="downloadicon" />
                          </td>
                          <td className="border border-slate-300 px-4 py-3">
                            <img src={ view } alt="viewicon" />
                          </td>
                          <td className="border border-slate-300 px-4 py-3">
                            <img src={ deleteicon } alt="deleteicon" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : null }
            </>
          ) }
        </form>
      </Modal>
    </Modal>
  );
}
