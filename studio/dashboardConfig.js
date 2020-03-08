export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e64c320e695da564aa8a7e9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zuy2dwub',
                  apiId: '5c4b31fc-958e-4a51-ad7c-428030681b52'
                },
                {
                  buildHookId: '5e64c3207a9ac85c7b59568c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7fdtrioh',
                  apiId: 'b869fe24-b2cc-4d39-a262-a5edac0e6d81'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/roncodenser/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7fdtrioh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
