import { createStore, applyMiddleware, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { appReducer, IApplicationState } from '../reducers/appReducer';
import { UserService } from 'services/user.service';
import { QuestionService } from 'services/questions.service';
import { NotificationService } from 'services/notification.service';

const loggerMiddleware = createLogger();

export default function configureStore() {
    let userService = new UserService();
    let questionService = new QuestionService();
    let notificationService = new NotificationService();

    const appStateStore: Store<IApplicationState, any> = createStore(appReducer,
        applyMiddleware(
            thunkMiddleware.withExtraArgument({ userService, questionService, notificationService }),
            loggerMiddleware));

    return appStateStore;
}
