import { combineEpics } from 'redux-observable';
import { filter, mapTo,  tap } from 'rxjs/operators';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers/dist';

// ACTIONS

const actionCreator = actionCreatorFactory('APP::STATE');
export const init = actionCreator('INIT');
export const searchUser = actionCreator('SEARCH_USER');
export const createUser = actionCreator('CREATE_USER');
export const removeUser = actionCreator('DELETE_USER');
export const editUser = actionCreator('EDIT_USER');

// SELECTS
export const selectuserList = ({ appState }) => appState.userList;


const INITIAL_STATE = {
	initialized: false,
	userList: [],
};

// REDUCER
export default reducerWithInitialState(INITIAL_STATE)
	.case(init, (state) => ({
		...state,
		initialized: true,
	}))
	.case(searchUser, (state) => {
		return {
			...state,
			userList: getuser()
		}
	})
	.build();

export function getuser() {
	const user = localStorage.getItem('user');
	return JSON.parse(user || '[]');
}

const createUserEpic = (action$) => action$.pipe(
	filter(createUser.match),
	tap((action) => {
		const user = getuser();
		const userrrs = action.payload
		console.log({userrrs})
		user.push(action.payload.user);
		console.log('chamou aqui', )
		debugger;
		localStorage.setItem('user', JSON.stringify(user))
	}),
	mapTo(searchUser()),
);

const removeUserEpic = (action$) => action$.pipe(
	filter(removeUser.match),
	tap((action) => {
		const user = getuser();

		user.forEach((task) => {
			if (task.id === action.payload.idTask) {
				const index = user.indexOf(task);

				if (index > -1) {
					user.splice(index, 1);
					localStorage.setItem('user', JSON.stringify(user))
				}
			}
		})
	}),
	mapTo(searchUser()),
);

const editUserEpic = (action$) => action$.pipe(
	filter(editUser.match),
	tap((action) => {
		const user = getuser();
		user.forEach((task) => {
			if (task.id === action.payload.idTask) {
				const index = user.indexOf(task);

				if (index > -1) {
					if (action.payload.textEdit) {
						user[index].text = action.payload.textEdit
					}
					else {
						if (action.payload.listId) {
							user[index].listId = action.payload.listId
						}
					}
					localStorage.setItem('user', JSON.stringify(user))
				}
			}
		})
	}),
	mapTo(searchUser()),
);
export const epics = combineEpics(
	createUserEpic,
	removeUserEpic,
	editUserEpic
);

