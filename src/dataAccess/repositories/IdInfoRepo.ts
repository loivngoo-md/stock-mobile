import { BaseRepository } from "./base";

import { ApiError } from "../../app/core";

import { IdInfoSchema } from "../schemas";

import { IIdInfo } from "../../interfaces";

import { CustomerDto } from "src/app/dto/common/CustomerDto";

import { GridParam } from "../../app/dto/requests/GridParam";

class IdInfoRepository extends BaseRepository<IIdInfo> {
  constructor() {
    super("idinfos", IdInfoSchema);
  }


  public getAll = async () => {
    return await this._model.find();
  };

  public getAllPagging = async (filter: GridParam) => {
    const keyword = new RegExp(filter.searchText, "i");

    let items = await this._model
      .find({ $or: [{ name: keyword }, { address: keyword }] })
    //   .select("name address id")
      .skip(filter.skipCount)
      .limit(filter.maxResultCount);

    const totalCount = await items.length;

    return {
      totalCount,
      items,
    };
  };
}

Object.seal(IdInfoRepository);
export { IdInfoRepository };
