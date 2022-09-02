import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AuthorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Posts {
  readonly id: string;
  readonly text?: string | null;
  readonly authorID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Posts, PostsMetaData>);
  static copyOf(source: Posts, mutator: (draft: MutableModel<Posts, PostsMetaData>) => MutableModel<Posts, PostsMetaData> | void): Posts;
}

export declare class Author {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly Posts?: (Posts | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Author, AuthorMetaData>);
  static copyOf(source: Author, mutator: (draft: MutableModel<Author, AuthorMetaData>) => MutableModel<Author, AuthorMetaData> | void): Author;
}