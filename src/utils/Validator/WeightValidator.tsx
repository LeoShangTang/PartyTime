import IWeight from "../Types/IWeight";

function validateWeightType(value: string | undefined): IWeight {
  return ["heavy", "medium", "light", "none"].includes(value as IWeight)
    ? (value as IWeight)
    : "none";
}

export default validateWeightType;
