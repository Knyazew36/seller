import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CheckPolicies, PoliciesGuard } from '@/common/casl';
import { CurrentUser } from '@/common/decorators/current-user.decorator';
import { OrganizationId } from '@/common/decorators/organization-id.decorator';
import { ResourceScope } from '@/common/decorators/resource-scope.decorator';
import { Swagger } from '@/common/decorators/swagger/swagger.decorator';
import { MultiAuthGuard } from '@/common/guards/multi-auth.guard';
import { OrgScopeGuard } from '@/common/guards/org-scope.guard';
import { ResourceScopeGuard } from '@/common/guards/resource-scope.guard';

import { CreateMarketplaceAccountDto } from './dto/create-marketplace-account.dto';
import { MarketplaceAccountQueryDto } from './dto/marketplace-account-query.dto';
import { MarketplaceAccountResponseDto } from './dto/marketplace-account.response.dto';
import { UpdateMarketplaceAccountDto } from './dto/update-marketplace-account.dto';
import { VerifyMarketplaceCredentialsDto } from './dto/verify-marketplace-credentials.dto';
import { VerifyMarketplaceCredentialsResponseDto } from './dto/verify-marketplace-credentials.response.dto';
import { MarketplaceAccountService } from './marketplace-account.service';

@ApiTags('marketplace-account')
@Controller('marketplace-account')
export class MarketplaceAccountController {
  constructor(private readonly service: MarketplaceAccountService) {}

  // --- проверка ключа; объявлено до ':id', чтобы 'verify' не парсился как id ---

  @Post('verify')
  @UseGuards(MultiAuthGuard, OrgScopeGuard, PoliciesGuard)
  @CheckPolicies((a) => a.can('manage', 'MarketplaceAccount'))
  @Swagger({
    title: 'Проверить ключ площадки без сохранения (ошибка — 400 с причиной)',
    body: VerifyMarketplaceCredentialsDto,
    response: VerifyMarketplaceCredentialsResponseDto,
    bearerAuth: true,
  })
  verify(@Body() dto: VerifyMarketplaceCredentialsDto) {
    return this.service.verify(dto);
  }

  // --- CRUD ---

  @Get('list')
  @UseGuards(MultiAuthGuard, OrgScopeGuard, PoliciesGuard)
  @CheckPolicies((a) => a.can('read', 'MarketplaceAccount'))
  @Swagger({
    title: 'Кабинеты площадок организации',
    query: MarketplaceAccountQueryDto,
    response: MarketplaceAccountResponseDto,
    isArray: true,
    bearerAuth: true,
  })
  list(
    @OrganizationId() organizationId: number,
    @Query() query: MarketplaceAccountQueryDto,
  ) {
    return this.service.list(organizationId, query);
  }

  @Post('create')
  @UseGuards(MultiAuthGuard, OrgScopeGuard, PoliciesGuard)
  @CheckPolicies((a) => a.can('manage', 'MarketplaceAccount'))
  @Swagger({
    title:
      'Подключить кабинет: ключ проверяется на площадке и сохраняется зашифрованным',
    body: CreateMarketplaceAccountDto,
    response: MarketplaceAccountResponseDto,
    bearerAuth: true,
  })
  create(
    @CurrentUser('id') userId: number,
    @OrganizationId() organizationId: number,
    @Body() dto: CreateMarketplaceAccountDto,
  ) {
    return this.service.create(userId, organizationId, dto);
  }

  @Get(':id')
  @UseGuards(MultiAuthGuard, ResourceScopeGuard, PoliciesGuard)
  @ResourceScope('marketplaceAccount')
  @CheckPolicies((a) => a.can('read', 'MarketplaceAccount'))
  @Swagger({
    title: 'Карточка кабинета площадки',
    param: { name: 'id', type: Number },
    response: MarketplaceAccountResponseDto,
    bearerAuth: true,
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findById(id);
  }

  @Post('update/:id')
  @UseGuards(MultiAuthGuard, ResourceScopeGuard, PoliciesGuard)
  @ResourceScope('marketplaceAccount')
  @CheckPolicies((a) => a.can('manage', 'MarketplaceAccount'))
  @Swagger({
    title:
      'Переименовать кабинет или заменить ключ (ключ — от того же кабинета)',
    param: { name: 'id', type: Number },
    body: UpdateMarketplaceAccountDto,
    response: MarketplaceAccountResponseDto,
    bearerAuth: true,
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateMarketplaceAccountDto,
  ) {
    return this.service.update(id, dto);
  }

  @Post('delete/:id')
  @UseGuards(MultiAuthGuard, ResourceScopeGuard, PoliciesGuard)
  @ResourceScope('marketplaceAccount')
  @CheckPolicies((a) => a.can('manage', 'MarketplaceAccount'))
  @Swagger({
    title: 'Отключить кабинет (ключ удаляется)',
    param: { name: 'id', type: Number },
    response: MarketplaceAccountResponseDto,
    bearerAuth: true,
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }

  // --- действия ---

  @Post('check/:id')
  @UseGuards(MultiAuthGuard, ResourceScopeGuard, PoliciesGuard)
  @ResourceScope('marketplaceAccount')
  @CheckPolicies((a) => a.can('manage', 'MarketplaceAccount'))
  @Swagger({
    title:
      'Перепроверить сохранённый ключ: кабинет станет ACTIVE или ERROR с причиной',
    param: { name: 'id', type: Number },
    response: MarketplaceAccountResponseDto,
    bearerAuth: true,
  })
  check(@Param('id', ParseIntPipe) id: number) {
    return this.service.check(id);
  }
}
