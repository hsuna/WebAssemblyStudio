import * as React from "react";
import { File, FileType, Directory, ModelRef } from "../models";
export declare class NewFileDialog extends React.Component<{
    isOpen: boolean;
    directory: ModelRef<Directory>;
    onCreate: (file: File) => void;
    onCancel: () => void;
}, {
    fileType: FileType;
    description: string;
    name: string;
}> {
    constructor(props: any);
    onChangeName: (event: React.ChangeEvent<any>) => void;
    getNameError(): string;
    fileName(): string;
    createButtonLabel(): string;
    render(): JSX.Element;
}
