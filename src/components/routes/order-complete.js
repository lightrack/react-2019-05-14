import React from "react";
import i18n from "../../decorators/i18n";

function OrderCompletePage(props) {
  return (
    <div>
      <h2 style={{ textAlign: "center", padding: "12px" }}>
        props.t('thanks for your order')
      </h2>
    </div>
  );
}

export default i18n(OrderCompletePage);
