import * as React from "react";
import { File, FileType, ModelRef } from "../models";
export interface EditFileDialogProps {
    isOpen: boolean;
    file: ModelRef<File>;
    onChange: (name: string, description: string) => void;
    onCancel: () => void;
}
export declare class EditFileDialog extends React.Component<EditFileDialogProps, {
    description: string;
    name: string;
    fileType: FileType;
}> {
    constructor(props: EditFileDialogProps);
    onChangeName: (event: React.ChangeEvent<any>) => void;
    onChangeDescription: (event: React.ChangeEvent<any>) => void;
    getNameError(): string;
    render(): JSX.Element;
}
