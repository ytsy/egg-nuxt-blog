module.exports = {
  about: {
    id: {
      tyep: 'string',
      minLength: 24,
      maxLength: 24,
    },
    profile: {
      type: 'object',
      required: ['description'],
      properties: {
        description: {
          type: 'string',
          minLength: 1,
        },
      },
    },
    platform: {
      type: 'object',
      required: ['description'],
      properties: {
        description: {
          type: 'string',
          minLength: 1,
        },
      },
    },
  },
  admin: {
    id: {
      type: 'string',
      minLength: 24,
      maxLength: 24,
    },
    username: {
      type: 'string',
      minLenght: 1,
    },
    password: {
      type: 'string',
      minLength: 6,
    },
    oldPassword: {
      type: 'string',
      minLength: 6,
    },
    newPassword: {
      type: 'string',
      minLength: 6,
    },
    role: {
      type: 'string',
      enmu: ['JUNIOR', 'SENIOR'],
    },
    level: {
      type: 'number',
      enmu: [1, 10],
    },
  },
  article: {
    categoryID: { type: 'string', min: 24, max: 24 },
    tagIdList: {
      type: 'array?',

      itemType: {
        type: 'string',
        min: 24,
        max: 24,
      },
    },
    title: {
      type: 'string',
    },
    content: {
      type: 'object',

      rule: {
        html: {
          type: 'string',
        },
        text: {
          type: 'string',
        },
      },
    },
    cover: {
      type: 'object?',
      rule: {
        name: {
          type: 'string',
          minLenght: 1,
        },
        path: {
          type: 'string',
          minLenght: 1,
        },
      },
    },
    id: {
      type: 'string?',
      min: 24,
      max: 24,
    },
    isPublished: {
      type: 'boolean?',
      default: true,
    },
  },
  category: {
    name: {
      type: 'string',
      minLength: 1,
    },
  },
  comment: {
    idList: {
      minItems: 1,
      type: 'array',
      items: {
        type: 'string',
        minLength: 24,
        maxLength: 24,
      },
    },
    id: {
      type: 'string',
      minLength: 24,
      maxLength: 24,
    },
    content: {
      type: 'string',
      minLength: 1,
    },
    email: {
      type: 'string',
      format: 'email',
    },
    nickname: {
      type: 'string',
      minLength: 1,
    },
    articleID: {
      type: 'string',
      minLength: 24,
      maxLength: 24,
    },
  },
  guestbook: {
    id: {
      type: 'string',
      minLength: 24,
      maxLength: 24,
    },
    responseID: {
      type: 'string',
      minLength: 24,
      maxLength: 24,
    },
    responseTo: {
      type: 'string',
    },
    content: {
      type: 'string',
      minLength: 1,
    },
    nickname: {
      type: 'string',
      minLength: 1,
    },
  },
  tag: {
    name: {
      type: 'string',
      minLength: 1,
    },
    id: {
      type: 'string',
      minLength: 24,
      maxLength: 24,
    },

    articleIdList: {
      type: 'array',
      items: {
        type: 'string',
        minLength: 24,
        maxLength: 24,
      },
    },
  },
}
