import { observable, autorun, runInAction } from "mobx"
import axios from "axios" // 3.4.1

class Store {
    repos = observable.map(new Map(), {deep: false})
    contributors = observable.map(new Map(), {deep: false})
    selectedRepo = observable.map(new Map(), {deep: false})
    selectedRoutes = observable([]);
    selectedContributor = observable.map(new Map(), {deep: false})

    constructor() {
        var disposer = autorun(() => {

            let selected = this.selectedRepo
            if (this.selectedRepo.size > 0) {

                let item = selected.toJSON()
                this.contributors.clear()
                this.getContributors(item.full_name)
            }

            // runInAction(() => {
            //     for (let name in item.value) {
            //         let pkg = this.packages.get(name)
            //         this.compareList.set(name, pkg)
            //     }
            // })

        })
    }

    getContributors(fullname) {
        const url = `https://api.github.com/repos/${fullname}/contributors`
        axios
            .get(url)
            .then(response => {
                runInAction(() => {
                    for (let x of response.data) {
                        this.contributors.set(x.login, x)
                    }
                })
            })
            .catch(function(error) {
                // handle error
                console.log(error)
            })
            .then(function() {
                // always executed
            })
    }

    goBack() {
        this.selectedRoutes.pop()
    }

    selectRepo(id, route = null) {
        let item = this.repos.get(id)
        runInAction(() => {
            this.selectedRepo.merge(item)
            if (route) {
                this.selectedRoutes.push(route)
            }
        })

    }

    selectContributor(id, route = null) {
        let item = this.contributors.get(id)
        runInAction(() => {
            this.selectedContributor.replace(item)
            if (route) {
                this.selectedRoutes.push(route)
            }
        })

    }

    searchRepo(language, query = null) {
        let url = `https://api.github.com/search/repositories?q=stars%3A%3E1+language:${language}&sort=stars&order=desc`
        if (query) {
            url = `https://api.github.com/search/repositories?q=${query}+language:${language}&sort=stars&order=desc`
        }

        axios
            .get(url)
            .then(response => {
                runInAction(() => {
                    this.contributors.clear()
                    this.repos.clear()


                    for (let x of response.data.items) {
                        this.repos.set(x.id, x)
                    }
                })
            })
            .catch(function(error) {
                // handle error
                console.log(error)
            })
            .then(function() {
                // always executed
            })
    }

}

const store = new Store()
export default store