import { provide, inject, ref, computed } from 'vue'

const api =
    'https://raw.githubusercontent.com/zzetao/awesome-github-profile-data/master/data.json'

interface IProfile {
    githubUrl: string
    nickName: string
    hasGif: boolean
    filePath: string
    previewImageUrl: string
    timestamp: string
}

interface ICategory {
    categoryName: string
    list: IProfile[]
}

interface IStore {
    selectedCategory: string
    loading: boolean
    errorText: string
    categories: ICategory[]
    profileList: IProfile[]
    setLoading: (toggle: boolean) => boolean
    fetchCategories: () => Promise<void>
    setSelectedCategory: (title: string) => string
}

const StoreSymbol = Symbol('Store')
const convertImageUrl = (path) =>
    `https://raw.githubusercontent.com/zzetao/awesome-github-profile-data/master/${path}`
const defaultCategories = [
    { categoryName: 'All', list: [] },
    { categoryName: 'Github Actions 🤖', list: [] },
    { categoryName: 'Game Mode 🚀', list: [] },
    { categoryName: 'Code Mode 👨🏽‍💻', list: [] },
    { categoryName: 'Dynamic Realtime 💫', list: [] },
    { categoryName: 'Descriptive 🗒', list: [] },
    { categoryName: 'Simple but Innovative Ones 🤗', list: [] },
    { categoryName: 'Typing.. Mode 🎰', list: [] },
    { categoryName: 'Anime 👾', list: [] },
    { categoryName: 'Minimalistic ✨', list: [] },
    { categoryName: 'GIFS 👻', list: [] },
    { categoryName: 'Just Images 🎭', list: [] },
    { categoryName: 'Badges 🎫', list: [] },
    { categoryName: 'Fancy Fonts 🖋', list: [] },
    { categoryName: 'Icons 🎯', list: [] },
]

export const useStoreProvide = () => {
    const loading = ref<boolean>(false)
    const errorText = ref<string>(null)
    const selectedCategory = ref<string>('All')
    const categories = ref<ICategory[]>(defaultCategories)

    const profileList = computed<IProfile[]>(() => {
        if (selectedCategory.value === 'All') {
            return categories.value.reduce(
                (prev, cur) => [...prev, ...cur.list],
                []
            )
        } else {
            return (
                categories.value.find(
                    (c) => c.categoryName === selectedCategory.value
                ).list || []
            )
        }
    })

    const setLoading = (toggle: boolean) => (loading.value = toggle)
    const setSelectedCategory = (name: string) =>
        (selectedCategory.value = name)

    const fetchCategories = async () => {
        setLoading(true)

        return fetch(api)
            .then((res) => res.json())
            .then((res) => {
                setLoading(false)
                const all = { categoryName: 'All', list: [] }

                if (Array.isArray(res)) {
                    res.unshift(all)
                } else {
                    res = []
                }

                categories.value = res.map((category) => {
                    category.list = (category.list || []).map((profile) => ({
                        ...profile,
                        previewImageUrl:
                            convertImageUrl(profile.filePath) +
                            '?t=' +
                            profile.timestamp,
                    }))
                    return category
                })

                return res
            })
    }

    provide(StoreSymbol, {
        loading,
        errorText,
        categories,
        selectedCategory,
        profileList,
        setLoading,
        fetchCategories,
        setSelectedCategory,
    })
}

export const useStoreInject = () => {
    return inject<IStore>(StoreSymbol)
}
