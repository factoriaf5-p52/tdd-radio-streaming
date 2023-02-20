export default {
      testEnvironment: "jsdom",
      transform: {
        "^.+\\.tsx?$": "ts-jest"
      },
      moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
      },
      setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

    }
  /*
  Un objeto de identidad que usa proxies ES6. Útil para probar importaciones triviales de paquetes web. Por ejemplo, puede decirle a Jest que simule este objeto como módulos CSS importados; entonces todas sus búsquedas de nombre de clase en el objeto de estilos importados se devolverán tal cual. */