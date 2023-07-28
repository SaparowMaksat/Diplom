import React from 'react'
import { Navigate } from 'react-router-dom'
import Main from './app/layouts/main'
import CreateProduct from './app/components/ui/createProduct/createProduct'
import BasketPage from './app/components/page/basketPage/basketPage'
import Login from './app/layouts/login'
import LoginForm from './app/components/ui/loginForm'
import UsersListPage from './app/components/page/usersListPage/usersListPage'

const routes = () => [
	{
		path: '/',
		element: <Main />,
		children: [],
	},
	{
		path: 'auth',
		element: <Login />,
		children: [
			{
				path: 'login',
				element: <LoginForm />,
			},

			//     {
			//         path: "*",
			//         element: <Navigate to="/auth/signUp" />
			//     }
		],
	},
	{
		path: 'users',
		element: <UsersListPage />,
	},
	{
		path: 'admin',
		element: '',
	},
	{
		path: 'createProduct',
		element: <CreateProduct />,
		// ? (
		//     <PostsLayout />
		// ) : (
		//     <Navigate to="/auth/login" state={{ referrer: location }} />
		// ),
		// children: [
		//     {
		//         path: "",
		//         element: <PostsListPage />
		//     },
		//     {
		//         path: ":postId",
		//         element: <PostPage />
		//     }
		// ]
	},
	{
		path: 'basket',
		element: <BasketPage />,
	},
	{
		path: '*',
		element: <Navigate to='/' />,
	},
]

export default routes
