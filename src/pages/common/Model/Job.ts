import { MessageBoard } from './MessageBoard';
import { User } from './User';
import { JobProgress } from './JobProgress';
import {TimeHelper} from '../Utilities/time-helper'
export class Job {
    key: string = '';
    jobCreatorName: string = '';
    jobCreatorUid: string = '';
    private jobCreationTime = ''
    serviceList = [];
    description: string = '';
    room: string = '';
    building: string = '';
    photosByClient = [];
    tradespersonList: User[] = []
    tradespersonAssignmentTime = ''
    checkInPhotos = []
    private checkInTime = ''
    completionPhotos = []
    private completionTime = ''
    completionApproval: User = null;
    private completionApprovalTime = ''
    private messageBoard = new MessageBoard()
    public getCreationTime() {
        if (this.jobCreationTime != '') {
            return TimeHelper.formatDate(new Date(this.jobCreationTime))
        } else {
            return undefined
        }
    }
    public setCreationTime(time: Date) {
        this.jobCreationTime = time.toJSON()
    }
    assignTradesperson(tp: User) {
        this.tradespersonList.push(tp)
        this.setTradespersonAssignmentTime(new Date())
    }
    public isTradespersonAssigned() {
        return this.tradespersonList.length > 0;
    }
    public getTradesPersonAssigned() {
        if (this.tradespersonList == undefined) {
            this.tradespersonList = []
        }
        return this.tradespersonList;
    }
    public getTradespersonAssignmentTime() {
        if (this.tradespersonAssignmentTime != '') {
            return TimeHelper.formatDate(new Date(this.tradespersonAssignmentTime));
        } else {
            return undefined;
        }
    }
    public setTradespersonAssignmentTime(time: Date) {
        this.tradespersonAssignmentTime = time.toDateString();
    }
    public isCheckedIn() {
        return this.checkInPhotos.length > 0;
    }
    public getCheckInTime() {
        if (this.checkInTime != '') {
            return TimeHelper.formatDate(new Date(this.checkInTime));
        } else {
            return undefined
        }
    }
    public setCheckInTime(time: Date) {
        this.checkInTime = time.toDateString();
    }
    public isCompleted() {
        return this.completionPhotos.length > 0;
    }
    public getCompletionTime() {
        if (this.completionTime != '') {
            return TimeHelper.formatDate(new Date(this.completionTime))
        } else {
            return undefined;
        }
    }
    public setCompletionTime(time: Date) {
        this.completionTime = time.toDateString();
    }
    public getMessageBoard() {
        if (this.messageBoard instanceof MessageBoard == false) {
            var mb = new MessageBoard()
            Object.assign(mb, this.messageBoard);
            this.messageBoard = mb;
        }

        return this.messageBoard;
    }

    approveCompletion(user: User) {
        this.completionApproval = user;
        this.setCompletionApprovalTime(new Date())
    }
    isCompletionApproved() {
        return this.completionApproval != undefined
    }
    public getCompletionApprovalTime() {
        if (this.completionApprovalTime != '') {
            return TimeHelper.formatDate(new Date(this.completionApprovalTime));
        } else {
            return undefined;
        }
    }
    public setCompletionApprovalTime(time: Date) {
        this.completionApprovalTime = time.toDateString();
    }
}
