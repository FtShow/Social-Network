import s from "./ProfileInfo.module.css";
import React, {ChangeEvent} from "react";
import {Preloader} from "../../../../Assets/Preloader";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (newStatus: string)=>void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, any> {
    componentDidMount() {
        console.log(this.props)
    }

    state = {
        editMode: false,
        status: this.props.status

    }
    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        this.state.editMode && this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            status: e.currentTarget.value
        })

    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <span onDoubleClick={this.toggleEditMode}>{this.props.status}</span>
                    : <input onBlur={this.toggleEditMode}
                             autoFocus
                             onChange={this.onStatusChange}
                             value={this.state.status}/>}


            </>
        )
    }
}