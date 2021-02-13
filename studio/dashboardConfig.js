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
                  buildHookId: '6027ecad18d0d26e61c22afd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xry5ztf6',
                  apiId: '45acfd64-bcf1-4746-a333-ae9c23f2feaa'
                },
                {
                  buildHookId: '6027ecad1a7fec5dd858dfc3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1sf41pwz',
                  apiId: 'af300de1-96f3-4b13-9b05-e4d5552658a8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/timyau/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1sf41pwz.netlify.app', category: 'apps'}
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
