import application from "./app/config/expressConf";
import { connectToMongo } from "./app/config/mongoConf";
import ApiNotFoundException from "./app/middleware/ApiNotFoundException";
import baseRoute from "./app/route/base";
import TraffictCore from "./pkg/traffict/core";
import * as dotenv from 'dotenv'
dotenv.config()


async function main() {
    await connectToMongo();
    TraffictCore();
    application.use('/', baseRoute)
    application.get('/api*', ApiNotFoundException)
    application.listen(3000, () => {
        console.log('Server is running on port 3000')
    })
}

main()