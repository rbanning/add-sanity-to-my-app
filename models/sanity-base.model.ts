export interface ISanityBase {
  _type: string;

  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
}

export class SanityBase implements ISanityBase {
  _type: string = 'unknown';
    
  _id: string = '';
  _rev: string = '';
  _createdAt: string = '';
  _updatedAt: string = '';

  constructor(type: string, obj?: unknown) {
    this._type = type;
    if (obj) {
      this._id = (obj as ISanityBase)._id ?? this._id;
      this._rev = (obj as ISanityBase)._rev ?? this._rev;
      this._createdAt = (obj as ISanityBase)._createdAt ?? this._createdAt;
      this._updatedAt = (obj as ISanityBase)._updatedAt ?? this._updatedAt;
    }
  }
}