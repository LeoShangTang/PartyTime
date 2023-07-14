type weightType = "heavy" | "medium" | "light" | "none";

function validateType(value: string | undefined): weightType {
  return ["heavy", "medium", "light", "none"].includes(value as weightType)
    ? (value as weightType)
    : "none";
}

export default validateType;
