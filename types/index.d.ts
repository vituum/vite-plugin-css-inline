export interface PluginUserConfig {
    paths?: string[]
    tables?: boolean
    doctype?: string
    postcss?: {
        customProperties?: import('postcss-custom-properties').pluginOptions
        processOptions?: import('postcss').ProcessOptions
        plugins?: import('postcss').AcceptedPlugin[]
    }
    options?: import('@css-inline/css-inline').Options
}

export default function plugin(options?: PluginUserConfig) : import('vite').Plugin
