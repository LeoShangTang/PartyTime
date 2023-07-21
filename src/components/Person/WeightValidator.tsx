type IWeight = "heavy" | "medium" | "light" | "none";

function validateType(value: string | undefined): IWeight {
  return ["heavy", "medium", "light", "none"].includes(value as IWeight)
    ? (value as IWeight)
    : "none";
}

export default validateType;
