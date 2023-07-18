import React, {ReactNode} from 'react';
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import formStyles from "./FormsControls.module.css"

export const ContainerTextArea: React.FC<WrappedFieldProps & { placeholder?: string }> = ({
                                                                                              input,
                                                                                              meta,
                                                                                              placeholder
                                                                                          }) => {
    return (
        <FormControl meta={meta}>
            <textarea placeholder={placeholder} {...input}/>
        </FormControl>
    );
};


export const ContainerInput: React.FC<WrappedFieldProps & { placeholder?: string, type: string }> = ({
                                                                                                         input,
                                                                                                         meta,
                                                                                                         placeholder,
                                                                                                         type,
                                                                                                         ...restProps
                                                                                                     }) => {
    console.log(type)
    return (
        <FormControl meta={meta} type={restProps}>
            <input placeholder={placeholder} type={type} {...input}/>
        </FormControl>
    );
};


const FormControl: React.FC<{ meta: WrappedFieldMetaProps, children: ReactNode, type?: any }> = ({
                                                                                                     meta,
                                                                                                     children,
                                                                                                     type
                                                                                                 }) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={hasError ? formStyles.error : formStyles.formControl}>
            {children}
            {hasError && <span className={formStyles.errorSpan}>{meta.error}</span>}
        </div>
    )
}
