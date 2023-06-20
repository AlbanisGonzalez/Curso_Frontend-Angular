import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/books/books.model';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            // password: 'admin', // sustituir por variable de entorno
            password: process.env.NEST_PASSWORD,
            database: 'backend_nest',
            entities: [
                // __dirname + 'src/**/*.model.ts'
                Book
            ],
            synchronize: true // generar tablas automáticamente en base a entidades
        })
    ]
})
export class DatabaseModule {}

// CREAR VARIABLE DE ENTORNO EN MAC
// Símbolo virgulilla en MAX: “ALT+Ñ”
// nano ~/.zshrc
// Al final del archivo: export NEST_PASSWORD=admin
// source ~/.zshrc
// echo $NEST_PASSWORD
