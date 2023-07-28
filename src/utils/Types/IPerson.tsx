import IWeight from "./IWeight";

type IPerson = {
  id: string;
  name: string;
  contact: string;
  food: IWeight;
  drinks: IWeight;
};

export default IPerson;