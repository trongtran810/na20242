import { Controller, Get, Req, Res } from '@nestjs/common';

import { Request, Response } from 'express';

@Controller('/')
export class AppController {
  @Get()
  hello(@Req() request: Request, @Res() res: Response) {
    const protocol = request.protocol; // http or https
    const host = request.get('host'); // hostname + port

    const docsUrl = `${protocol}://${host}/docs`;
    const htmlContent = `
      <html>
        <head>
          <title>Admin Nam An</title>
        </head>
        <body>
          <h1>Hello from Nam An Admin! </h1>
          <div>Click <a href="${docsUrl}">here</a> to check API doc</div>
        </body>
      </html>
    `;
    res.setHeader('Content-Type', 'text/html');
    res.send(htmlContent);
  }
}
