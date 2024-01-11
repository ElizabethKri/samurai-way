export type MessageType = {
    id: number,
    message: string
}

export type DialogType = {
    id: number,
    name: string
}

export type PostType = {
    id: number,
    name: string,
    likeCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType
}

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount:  11},
            {id: 3, message: 'Blabla', likesCount:  10},
            {id: 4, message: 'Dada', likesCount:  9},

        ],
    },

        dialogsPage: {
            dialogs: [
                {id: 1, name: "Elizabeth"},
                {id: 2, name: "Valera"},
                {id: 3, name: "Kris"},
                {id: 4, name: "Nikita"},
                {id: 5, name: "Mark"},
                {id: 6, name: "Andrew"},
            ],

            messages: [
                {id: 1, messages: "Hello!"},
                {id: 2, messages: "Hi"},
                {id: 3, messages: "What is your name?"},
                {id: 4, messages: "How are you?"},
                {id: 5, messages: "Beatiful"},
            ],

    },
    sidebar: {}
}

export default state