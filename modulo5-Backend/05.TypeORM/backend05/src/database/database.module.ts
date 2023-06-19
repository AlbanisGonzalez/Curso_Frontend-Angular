import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password:'admi', // sustituir por variable de entorno 
            database: 'backend_nest',
            entities: [
                __dirname + '/../**/*.model.ts'
            ],
            synchronize: true // generar tablas automáticamente en base a entidades
        })
    ]
})
export class DatabaseModule { }
