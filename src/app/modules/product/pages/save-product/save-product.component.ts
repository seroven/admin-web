import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductInterface } from '../../interfaces/product.interface';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from '../../services/product.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastService } from 'src/app/shared/services/toast.service';
import { EnumTypeMessage } from 'src/app/shared/enums/type-message.enum';
import { ValidateInputClass } from 'src/app/shared/classes/validate-input.class';
import { ErrorInputMessage } from 'src/app/shared/constants/error-input-messages';

@Component({
  selector: 'app-save-product',
  templateUrl: './save-product.component.html',
  styleUrls: [],
})
export class SaveProductComponent {
  @Input() visible: boolean = false;
  @Output() onHidePage = new EventEmitter<void>();

  public formProduct: FormGroup;
  public validateFormProduct:ValidateInputClass;
  public errorInputMessage = ErrorInputMessage;

  public loadSubmit: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastService: ToastService
  ) {
    this.formProduct = formBuilder.group({
      id: new FormControl(null),
      nombre: new FormControl(null, [Validators.required]),
      descripcion: new FormControl(null, [Validators.required]),
      precio: new FormControl(null, [Validators.required]),
    });
    this.validateFormProduct = new ValidateInputClass(this.formProduct);  
  }

  ngOnInit(): void {
    // TODO Edit product
    // this.productService.selectedProduct$.subscribe((product) => {
    //   this.formProduct.patchValue({
    //     id: product.id,
    //     description: product.description,
    //     price: product.price,
    //     idcategory: product.category?.id,
    //   });
    // });
  }

  reset() {
    this.formProduct.reset();
  }

  closeModal() {
    this.onHidePage.emit();
  }

  cancel() {
    this.reset();
    this.closeModal();
  }

  submit() {
    if (this.formProduct.invalid) return;
    const product: ProductInterface = this.formProduct.value;
    this.toastService.showMessage(EnumTypeMessage.CREATE_SUCCESS);
    // this.loadSubmit = true;
    console.log('send');
  }
}
