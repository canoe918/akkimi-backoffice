import { Injectable } from '@nestjs/common';
import Airtable from 'airtable';
import { TABLE_KEYS } from 'apps/airtable/src/constants/keys';
import { TodoTableDto } from 'apps/airtable/src/dto/todo/todo.dto';
import camelCase from 'lodash/camelCase';

@Injectable()
export class AppService {
  airtable: Airtable;

  constructor() {
    this.airtable = new Airtable();
  }

  async getTodoList(): Promise<TodoTableDto[]> {
    const base = this.airtable.base(process.env.AIRTABLE_BO_BASE_ID);
    const table = await base.table(TABLE_KEYS.TODO).select().all();

    return table
      .map((row) => {
        const field = row.fields;
        const camelCaseObject = {};
        Object.entries(field).forEach(([key, value]) => {
          camelCaseObject[camelCase(key)] = value;
        });

        return camelCaseObject as TodoTableDto;
      })
      .sort((a, b) => a.priority - b.priority);
  }
}
