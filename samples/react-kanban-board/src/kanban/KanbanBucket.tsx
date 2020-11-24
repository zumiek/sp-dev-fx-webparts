import * as React from 'react';
import styles from './KanbanBucket.module.scss';
import { IKanbanBucket } from './IKanbanBucket';
import { IKanbanTask } from './IKanbanTask';
import { IKanbanBoardTaskSettings } from './IKanbanBoardTaskSettings';
import { IKanbanBoardTaskActions } from './IKanbanBoardTaskActions';
import { ProgressIndicator } from 'office-ui-fabric-react/lib/ProgressIndicator';
import { ActionButton } from 'office-ui-fabric-react';
import KanbanTask from './KanbanTask';
import classNames from 'classnames';
import * as strings from 'KanbanBoardStrings';

export interface IKanbanBucketProps extends IKanbanBucket {

    buckettasks: IKanbanTask[];
    tasksettings: IKanbanBoardTaskSettings;


    toggleCompleted?: (taskId: string) => void;
    addTask?: (bucket: string) => void;

    onDragStart: (event, taskId: string, bucket: string) => void;

    onDragEnd: (event, taskId: string, bucket: string) => void;



    leavingTaskId?: string;
    leavingBucket?: string;
    overBucket?: string;
    hasOneProcessIndicator: boolean;
    openDetails?: (taskId: string) => void;
}

export interface IKanbanBucketState { }

export default class KanbanBucket extends React.Component<IKanbanBucketProps, IKanbanBucketState> {

    constructor(props: IKanbanBucketProps) {
        super(props);

        this.state = {

        };

    }
    /*
    nice to use a object merge
    ECMAScript 2018 Standard Method
    {...t, ...tasksettings, ...taskactions}
    hope this will be translated in IE
    */
    public render(): React.ReactElement<IKanbanBucketProps> {
        const { bucket, bucketheadline, color, buckettasks,
            tasksettings, percentageComplete,
            allowAddTask, showPercentageHeadline, leavingTaskId, leavingBucket,hasOneProcessIndicator } = this.props;

        return (
            <div
                className={styles.bucket}
                key={bucket}>
                <div className={styles.headline}>
                    <div className={styles.headlineText}>{bucketheadline}</div>
                    {color && <div style={{ backgroundColor: color }} className={styles.colorindicator}></div>}
                    {showPercentageHeadline ? 
                    (<ProgressIndicator percentComplete={percentageComplete / 100} />):
                    (hasOneProcessIndicator?(<div className={styles.processIndicatorHeight}></div>):(<div></div>))}
                </div>
                {allowAddTask && (<ActionButton
                    iconProps={{ iconName: 'Add' }}
                    allowDisabledFocus={true}
                    onClick={() => this.props.addTask(bucket)}
                >
                    {strings.AddTask}
                </ActionButton>)}
                <div className={styles.taskArea}>
                    {
                        buckettasks.map((t) => {
                            const merge = { ...t, ...tasksettings, };
                            const isMoving = (t.taskId === leavingTaskId && t.bucket === leavingBucket);

                            return (<div
                                className={styles.taskplaceholder + (isMoving ? styles.placeholder : '')}
                                key={'' + t.taskId} >
                                <KanbanTask
                                    key={'task' + t.taskId}
                                    {...merge}
                                    toggleCompleted={this.props.toggleCompleted}
                                    isMoving={isMoving}
                                    openDetails={this.props.openDetails}
                                    onDragStart={(event) => this.props.onDragStart(event, t.taskId, t.bucket)}
                                    onDragEnd={(event) => this.props.onDragEnd(event, t.taskId, t.bucket)}
                                /></div>
                            );
                        })
                    }
                </div>
            </div >
        );
    }



}
