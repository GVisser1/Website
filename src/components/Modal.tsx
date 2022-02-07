import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Title } from "./Title";
import { Button } from "./Button";
import { IconType } from "./Icon";
import { t } from "i18next";

interface ModalProps {
  title: string;
  btnClassName?: string;
  btnLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  title,
  btnClassName,
  btnLabel,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Button
        className={btnClassName}
        block
        label={btnLabel}
        onClick={openModal}
      />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="flex min-h-screen items-center justify-center py-4 px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-xl transform rounded-2xl border-2 border-gray-700 bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-600">
                <div className="flex items-center justify-between">
                  <Title as="h3" size="2xl">
                    {title}
                  </Title>
                  <Button icon={IconType.X} type="clear" onClick={closeModal} />
                </div>
                {props.children}
                <Button
                  block
                  onClick={closeModal}
                  label={t("CLOSE")}
                  className="pt-8"
                />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
