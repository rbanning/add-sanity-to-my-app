import { Image } from 'sanity';
import { ISanityBase, SanityBase } from './sanity-base.model';
import { documentTypeNames } from '@/lib';

export interface IEmployee extends ISanityBase {
  name: string;
  roles: string[];
  image: Image;     //from Sanity
  caption: string;  //from the image
  bio: string;
  rating: number;
}

export class Employee extends SanityBase implements IEmployee {
  name: string = '';
  roles: string[] = [];
  image!: Image;
  caption: string = '';  //from image
  bio: string = '';
  rating: number = 0;

  constructor(obj?: unknown) {
    super(documentTypeNames.employee)
    if (obj) {
      this.name = (obj as IEmployee).name ?? this.name;
      this.roles = Array.isArray((obj as IEmployee).roles) ? (obj as IEmployee).roles : this.roles;
      this.image = (obj as IEmployee).image;
      this.caption = (obj as IEmployee).caption ?? this.caption;
      this.bio = (obj as IEmployee).bio ?? this.bio;
      this.rating = (obj as IEmployee).rating ?? this.rating;
    }
  }
}