import React, {ChangeEvent, useState} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = ({updateStatus, ...restStatus}) => {
    const [editMode, setEditMode] = useState(false);
    const [editableStatus, setEditableStatus] = useState<string>(restStatus.status)
    const editStatus = (e: ChangeEvent<HTMLInputElement>) =>{
        setEditableStatus(e.currentTarget.value)
    }
    const finishEdit = (newStatus: string)=>{
        setEditMode(false)
        updateStatus(newStatus)
    }

    return (
        <>
            {!editMode? (
                <span onDoubleClick={() => {
                    setEditMode(true);
                }}>{restStatus.status}</span>
            ) : (
                <input
                    onBlur={()=>{finishEdit(editableStatus)}}
                    autoFocus
                    onChange={editStatus}
                    value={editableStatus}
                />
            )}
        </>
    );
};
