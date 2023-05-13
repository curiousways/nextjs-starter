import {
  ResponsiveImageType,
  StructuredTextGraphQlResponse,
} from "react-datocms";

export interface Block {
  id: string;
  _modelApiKey: string;
  [key: string]: any;
}

export interface ModularComponent {
  block: Block;
}
