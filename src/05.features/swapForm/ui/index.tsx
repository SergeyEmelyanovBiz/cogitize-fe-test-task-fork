"use client";

import { motion } from "framer-motion";
import { ArrowDownUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/07.shared/components";
import { useSwapForm } from "../model/hooks";
import { ConfirmModal } from "./confirmModal";
import { SwapField } from "./swapField";

export const SwapForm = () => {
  const t = useTranslations("swap");
  const [modalOpen, setModalOpen] = useState(false);

  const {
    fromAsset,
    toAsset,
    fromValue,
    toValue,
    canConfirm,
    isError,
    handleFromChange,
    handleToChange,
    selectFromAsset,
    selectToAsset,
    swapTokens,
    resetForm,
  } = useSwapForm();

  const closeModal = () => {
    setModalOpen(false);
    resetForm();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-md rounded-3xl bg-[#1c1c1e] p-6"
    >
      <h2 className="mb-5 text-sm font-medium text-gray-300">{t("title")}</h2>

      <div className="relative rounded-2xl border border-white/10 p-4">
        <SwapField
          label={t("youSend")}
          asset={fromAsset}
          value={fromValue}
          onAssetSelect={selectFromAsset}
          onValueChange={handleFromChange}
        />

        <div className="my-4 flex items-center">
          <div className="h-px flex-1 bg-white/10" />
          <motion.button
            type="button"
            onClick={swapTokens}
            whileTap={{ scale: 0.9, rotate: 180 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            aria-label={t("swap")}
            className="mx-3 flex size-9 items-center justify-center rounded-full bg-[#2c2c2e]"
          >
            <ArrowDownUp className="size-4 text-[#16C784]" />
          </motion.button>
          <div className="h-px w-4 bg-white/10" />
        </div>

        <SwapField
          label={t("youReceive")}
          asset={toAsset}
          value={toValue}
          onAssetSelect={selectToAsset}
          onValueChange={handleToChange}
        />
      </div>

      {isError && (
        <p
          role="alert"
          className="mt-4 text-center text-sm text-[#ff6b6b]"
        >
          {t("error")}
        </p>
      )}

      <Button
        onClick={() => setModalOpen(true)}
        disabled={!canConfirm}
        className="mt-5"
      >
        {t("confirm")}
      </Button>

      <ConfirmModal
        open={modalOpen}
        onClose={closeModal}
        fromSymbol={fromAsset.symbol}
        toSymbol={toAsset.symbol}
        give={fromValue}
        receive={toValue}
      />
    </motion.div>
  );
};

