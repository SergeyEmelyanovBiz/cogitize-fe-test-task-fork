"use client";

import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button, Modal } from "@/07.shared/components";

type ConfirmModalProps = {
  open: boolean;
  onClose: () => void;
  fromSymbol: string;
  toSymbol: string;
  give: string;
  receive: string;
};

export const ConfirmModal = ({
  open,
  onClose,
  fromSymbol,
  toSymbol,
  give,
  receive,
}: ConfirmModalProps) => {
  const t = useTranslations("swap");

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col items-center gap-4 text-center">
        <CheckCircle2 className="size-12 text-[#16C784]" />
        <p className="text-base text-white">
          {t("successMessage", {
            give: `${give} ${fromSymbol}`,
            receive: `${receive} ${toSymbol}`,
          })}
        </p>
        <Button onClick={onClose} className="mt-2">
          {t("ok")}
        </Button>
      </div>
    </Modal>
  );
};

