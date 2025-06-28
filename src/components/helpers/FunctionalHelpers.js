export const formatINR = (amount) => {
  if (!amount) return "";

  const num = typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(num)) return "₹ 0";

  const rounded = Math.round(num);
  return `₹ ${rounded.toLocaleString("en-IN")}`;
};
